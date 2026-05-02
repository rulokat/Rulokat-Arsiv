/**
 * storage.js — Hybrid storage layer
 * Senkron API için localStorage (in-memory gibi çalışır),
 * arka planda localforage (IndexedDB) ile kalıcı depolama.
 * initStorage() anında döner — sayfa bloke olmaz.
 */

import localforage from 'localforage';

const lf = localforage.createInstance({
  name: 'rulokat-arsiv',
  storeName: 'rulokat_data',
});

// ── İlk yükleme: localStorage'ı IndexedDB'ye sessizce taşı ──────────────
export function initStorage() {
  // Fire-and-forget: arka planda çalışır, sayfayı bekletmez
  lf.ready().then(() => {
    // Migrate localStorage → IndexedDB (sadece bir kez)
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }
    keys.forEach(async (key) => {
      const val = localStorage.getItem(key);
      if (val !== null) {
        const existing = await lf.getItem(key);
        if (existing === null) {
          await lf.setItem(key, val);
        }
      }
    });
  }).catch(e => console.warn('localforage init skipped:', e));
}

// ── Senkron okuma: localStorage'dan anında döner ─────────────────────────
export function getItemSync(key) {
  return localStorage.getItem(key);
}

// ── Asenkron yazma: hem localStorage hem IndexedDB'ye yazar ──────────────
export function setItemAsync(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch(e) {
    // localStorage dolu olabilir (5MB limit) — sadece IndexedDB'ye yaz
    console.warn('localStorage quota exceeded, falling back to localforage only');
  }
  lf.setItem(key, value).catch(e => console.warn('localforage write error:', e));
}

// ── Silme ────────────────────────────────────────────────────────────────
export function removeItemAsync(key) {
  localStorage.removeItem(key);
  lf.removeItem(key).catch(e => console.warn('localforage remove error:', e));
}

// Global erişim (inline onclick'ler için)
window.getItemSync   = getItemSync;
window.setItemAsync  = setItemAsync;
window.removeItemAsync = removeItemAsync;
