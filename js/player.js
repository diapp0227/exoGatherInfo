'use strict';

const EXO_SETLIST = [
  { n: '01', title: 'MAMA',                    vid: 'KH6ZwnqZ7Wo' },
  { n: '02', title: 'Monster',                 vid: 'KSH-FVVtTf0' },
  { n: '03', title: 'Overdose',                vid: 'TI0DGvqKZTI' },
  { n: '04', title: 'Moonlight Shadows',       vid: 'MzgmGnNm3l4' },
  { n: '05', title: 'Gravity',                 vid: 'NsubiQ0nGbE' },
  { n: '06', title: 'Jekyll',                  vid: 'FpoX3HJPZd8' },
  { n: '07', title: 'Crazy',                   vid: 'LHVF5UyKFwg' },
  { n: '08', title: 'PLAYBOY',                 vid: 'e6AIFCuQR-E' },
  { n: '09', title: 'Artificial Love',         vid: 'c4_Pc4gZELo' },
  { n: '10', title: 'The Eve',                 vid: 'gK8YC0nxNe0' },
  { n: '11', title: 'Love Shot',               vid: 'pSudEWBAYRE' },
  { n: '12', title: 'Power',                   vid: 'sGRv8ZBLuW0' },
  { n: '13', title: "Don't Fight the Feeling", vid: '2IkoKhr6Tss' },
  { n: '14', title: 'Run',                     vid: 'VgI8_hZFZJE' },
  { n: '15', title: 'Tempo',                   vid: 'iwd8N6K-sLk' },
  { n: '16', title: 'Ko Ko Bop',               vid: 'IdssuxDdqKk' },
  { n: '17', title: 'CALL ME BABY',            vid: 'yWfsla_Uh80' },
  { n: '18', title: 'LOVE ME RIGHT',           vid: 'RuqaVryDRd0' },
  { n: '19', title: 'Growl',                   vid: 'I3dezFzsNss' },
  { n: '20', title: "Baby Don't Cry",          vid: 'Qx1V-GRT0Fw' },
  { n: '21', title: 'Walk On Memories',        vid: 'E-UTLImG0ss' },
  { n: '22', title: "Don't Go",                vid: 'xtzi4jdpKhI' },
  { n: '23', title: 'EL DORADO',               vid: 'WhWNDc2_0Xo' },
  { n: '24', title: 'Back It Up',              vid: 'nGG42t7pm5Y' },
  { n: '25', title: 'Forever',                 vid: 'iWsw98mCssg' },
  { n: '26', title: 'Crown',                   vid: 'BWfKkqo1Mk8' },
  { n: '27', title: 'Back Pocket',             vid: 'BCRbKttp5YY' },
  { n: '28', title: 'Paradise',                vid: 'yFbK03_tPaM' },
  { n: '29', title: 'Flatline',                vid: '2fGLkavJYA8', encore: true },
  { n: '30', title: 'Angel',                   vid: '9uSkhlKNKSY', encore: true },
];

function buildSetlist() {
  const grid = document.getElementById('exo-setlist-grid');
  if (!grid) return;

  EXO_SETLIST.forEach(song => {
    const a = document.createElement('a');
    a.className = 'sl-item' + (song.encore ? ' sl-encore-song' : '');
    a.href = 'https://www.youtube.com/watch?v=' + song.vid;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML =
      '<span class="sl-num">' + song.n + '</span>' +
      '<span class="sl-title">' + song.title +
      (song.encore ? ' <span class="sl-encore-badge">ENC</span>' : '') +
      '</span>';
    grid.appendChild(a);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildSetlist);
} else {
  buildSetlist();
}
