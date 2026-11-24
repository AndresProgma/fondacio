// Agenda Fondacio · guarda los datos del equipo en una carpeta de Google Drive.
// Se pega una sola vez en script.google.com con la cuenta de Google de Fondacio
// y se publica como "Aplicación web" (Ejecutar como: yo · Quién tiene acceso: cualquier persona).
// Cada computador guarda su propio archivo agenda-datos-<pc>.json en la carpeta "Agenda Fondacio".
// Si en esa carpeta (o en su subcarpeta "actas") ponen actas en Word o Google Docs, la página avisa para cargarlas.
// Las actas que se cargan en la página también se guardan en la subcarpeta "actas", y los historiales en "historial".

var CARPETA = 'Agenda Fondacio';

function carpeta_() {
  var it = DriveApp.getFoldersByName(CARPETA);
  return it.hasNext() ? it.next() : DriveApp.createFolder(CARPETA);
}

function salida_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function esActa_(f) {
  var n = f.getName(), t = f.getMimeType();
  if (/^~\$/.test(n) || /plantilla|gu[ií]a|instructivo/i.test(n)) return false;
  return /\.docx$/i.test(n) || (t === MimeType.GOOGLE_DOCS && /acta/i.test(n));
}

function actas_(c, lista) {
  var dentro = function (fol) {
    var it = fol.getFiles();
    while (it.hasNext()) {
      var f = it.next();
      if (esActa_(f)) lista.push({ id: f.getId(), n: f.getName().replace(/\.docx$/i, '') + '.docx', m: f.getLastUpdated().getTime() });
    }
  };
  dentro(c);
  var sub = c.getFoldersByName('actas');
  if (sub.hasNext()) dentro(sub.next());
}

function doGet(e) {
  var p = (e && e.parameter) || {}, c = carpeta_();
  if (p.archivo) {
    var f = DriveApp.getFileById(p.archivo), bytes;
    if (f.getMimeType() === MimeType.GOOGLE_DOCS) {
      var url = 'https://docs.google.com/document/d/' + f.getId() + '/export?format=docx';
      bytes = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() } }).getContent();
    } else bytes = f.getBlob().getBytes();
    return salida_({ ok: true, nombre: f.getName(), b64: Utilities.base64Encode(bytes) });
  }
  var desde = Number(p.desde || 0), datos = [], actas = [], it = c.getFiles();
  while (it.hasNext()) {
    var g = it.next(), n = g.getName(), m = g.getLastUpdated().getTime();
    if (/^agenda-datos-[a-z0-9]+\.json$/.test(n)) datos.push(m > desde && n !== 'agenda-datos-' + p.pc + '.json' ? { n: n, m: m, txt: g.getBlob().getDataAsString() } : { n: n, m: m });
  }
  actas_(c, actas);
  return salida_({ ok: true, carpeta: c.getUrl(), datos: datos, actas: actas });
}

// Guarda un archivo (acta en Word, historial) en una subcarpeta. Si ya existe con ese nombre, lo reemplaza.
function subir_(c, d) {
  var nombre = String(d.nombre || '').replace(/[\\/:*?"<>|]/g, '-').slice(0, 120);
  var sub = d.carpeta === 'historial' ? 'historial' : 'actas';
  if (!/\.docx$/i.test(nombre)) return salida_({ ok: false, error: 'solo se guardan archivos de Word' });
  var it = c.getFoldersByName(sub), fol = it.hasNext() ? it.next() : c.createFolder(sub);
  var viejos = fol.getFilesByName(nombre);
  while (viejos.hasNext()) viejos.next().setTrashed(true);
  var blob = Utilities.newBlob(Utilities.base64Decode(d.b64), 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', nombre);
  var f = fol.createFile(blob);
  return salida_({ ok: true, id: f.getId(), m: f.getLastUpdated().getTime(), url: f.getUrl() });
}

function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  if (!/^[a-z0-9]{4,12}$/.test(d.pc || '')) return salida_({ ok: false, error: 'datos inválidos' });
  if (d.subir) return subir_(carpeta_(), d.subir);
  if (typeof d.txt !== 'string') return salida_({ ok: false, error: 'datos inválidos' });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var c = carpeta_(), n = 'agenda-datos-' + d.pc + '.json', it = c.getFilesByName(n);
    if (it.hasNext()) it.next().setContent(d.txt); else c.createFile(n, d.txt, 'application/json');
  } finally { lock.releaseLock(); }
  return salida_({ ok: true });
}

// Para probar a mano en el editor: crea la carpeta y pide los permisos.
function probar() {
  Logger.log(carpeta_().getUrl());
}
