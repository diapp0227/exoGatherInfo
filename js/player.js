'use strict';

const EXO_SETLIST = [
  {
    n: '01', title: 'MAMA', vid: 'KH6ZwnqZ7Wo',
    chant: [
      { lbl: 'イントロ',       txt: 'EXO！EXO！EXO！' },
      { lbl: 'メンバー',       txt: 'スホ！チャンヨル！ディオ！カイ！セフン！レイ！' },
      { lbl: 'サビ',          txt: '「mama mama mama」→ ママ！（エコー）' },
      { lbl: 'ブリッジ',       txt: '위아원！ ウィアウォン！（WE ARE ONE！）' },
    ],
  },
  {
    n: '02', title: 'Monster', vid: 'KSH-FVVtTf0',
    chant: [
      { lbl: 'イントロ',  txt: 'E.X.O！モン・ス・タ！（区切り発音）' },
      { lbl: 'サビ',     txt: '「I\'m so monster」→ EXO！（合いの手）' },
      { lbl: 'エコー',   txt: '「you call me monster」でファンもエコー' },
    ],
  },
  {
    n: '03', title: 'Overdose', vid: 'TI0DGvqKZTI',
    chant: [
      { lbl: 'Wolfイントロ', txt: '늑대 늑대（ヌンデ ヌンデ）→ EXO！' },
      { lbl: 'サビ',        txt: '중독됐어 중독됐어（チュンドクデッソ チュンドクデッソ）— エコー' },
      { lbl: 'メンバー',    txt: 'スホ！チャンヨル！ディオ！カイ！セフン！レイ！' },
    ],
  },
  {
    n: '04', title: 'Moonlight Shadows', vid: 'MzgmGnNm3l4',
    chant: [
      { lbl: '備考', txt: 'REVERXE新曲（公式チャント未発表）。サビでEXO！と手拍子' },
    ],
  },
  {
    n: '05', title: 'Gravity', vid: 'NsubiQ0nGbE',
    chant: [
      { lbl: 'サビ', txt: '「The gravity」部分でファン唱和、EXO！コール' },
    ],
  },
  {
    n: '06', title: 'Jekyll', vid: 'FpoX3HJPZd8',
    chant: [
      { lbl: '備考', txt: 'REVERXE新曲。Crazyと連続演奏。ブレイクでEXO！、手拍子' },
    ],
  },
  {
    n: '07', title: 'Crazy', vid: 'LHVF5UyKFwg',
    chant: [
      { lbl: '備考', txt: 'REVERXE新曲。Jekyllから続けて演奏。EXO！コール＋手拍子' },
    ],
  },
  {
    n: '08', title: 'PLAYBOY', vid: 'e6AIFCuQR-E',
    chant: [
      { lbl: 'サビ',   txt: '「Play boy, play boy」でファン唱和' },
      { lbl: '間奏',   txt: 'EXO！コール' },
    ],
  },
  {
    n: '09', title: 'Artificial Love', vid: 'c4_Pc4gZELo',
    chant: [
      { lbl: 'サビ',   txt: '아찔한 사랑（アチルハン サラン）で唱和' },
      { lbl: '全体',   txt: 'ビートに合わせて手拍子' },
    ],
  },
  {
    n: '10', title: 'The Eve', vid: 'gK8YC0nxNe0',
    chant: [
      { lbl: 'サビ',   txt: '전야 전야（チョンヤ チョンヤ）でエコー唱和' },
      { lbl: 'ブレイク', txt: 'EXO！コール' },
      { lbl: '演出',   txt: 'イントロでペンライトを下げるのが定番' },
    ],
  },
  {
    n: '11', title: 'Love Shot', vid: 'pSudEWBAYRE',
    chant: [
      { lbl: 'サビ',   txt: '「Love Shot」→ ラブショッ！（エコー）× 繰り返し' },
      { lbl: '合いの手', txt: '빵야！（パンヤ！）コール' },
      { lbl: '演出',   txt: 'ペンライトを左右に振る' },
    ],
  },
  {
    n: '12', title: 'Power', vid: 'sGRv8ZBLuW0',
    chant: [
      { lbl: 'イントロ', txt: '「We got the Power！」' },
      { lbl: 'サビ',    txt: '파워 파워（パウォ パウォ）でファン唱和' },
      { lbl: '全体',    txt: 'ビートに合わせた手拍子' },
    ],
  },
  {
    n: '13', title: "Don't Fight the Feeling", vid: '2IkoKhr6Tss',
    chant: [
      { lbl: 'サビ',   txt: '「Don\'t fight the feeling」でファン唱和' },
      { lbl: '間奏',   txt: 'EXO！コール' },
    ],
  },
  {
    n: '14', title: 'Run', vid: 'VgI8_hZFZJE',
    chant: [
      { lbl: 'サビ',   txt: '「Run Run Run」でファン唱和' },
      { lbl: '間奏',   txt: 'EXO！コール' },
    ],
  },
  {
    n: '15', title: 'Tempo', vid: 'iwd8N6K-sLk',
    chant: [
      { lbl: 'イントロ', txt: 'E.X.O！テン・ポ！（区切り）' },
      { lbl: 'サビ',    txt: '「1・2・3！」→ Get down！（掛け合い）' },
      { lbl: 'ブリッジ', txt: '위아원！ ウィアウォン！' },
    ],
  },
  {
    n: '16', title: 'Ko Ko Bop', vid: 'IdssuxDdqKk',
    chant: [
      { lbl: 'サビ',   txt: 'E.X.O！Ko Ko Bop！' },
      { lbl: '連呼',   txt: 'E.X.O！E.X.O！E.X.O！E.X.O！' },
      { lbl: '締め',   txt: '위아원！ ウィアウォン！（We Are One！）' },
    ],
  },
  {
    n: '17', title: 'CALL ME BABY', vid: 'yWfsla_Uh80',
    chant: [
      { lbl: 'ラップ前', txt: 'E-X-O！Listen！EXO！' },
      { lbl: 'サビ',    txt: '「Call me baby」でエコーコール' },
      { lbl: '呼びかけ', txt: '「Say my name！」でファン応答' },
    ],
  },
  {
    n: '18', title: 'LOVE ME RIGHT', vid: 'RuqaVryDRd0',
    chant: [
      { lbl: 'サビ',   txt: '「Love me right」でエコーコール' },
      { lbl: '全体',   txt: '手拍子中心の明るいノリ' },
    ],
  },
  {
    n: '19', title: 'Growl', vid: 'I3dezFzsNss',
    chant: [
      { lbl: 'イントロ', txt: '잘 들어！（チャル トゥロ！= よく聞け！）' },
      { lbl: 'サビ',    txt: '으르렁 으르렁 으르렁 대（ウルロン×3 デ）— 全員で大合唱！' },
      { lbl: '掛け合い', txt: '깨어나 / 물러나（ッケオナ／ムルロナ）各フレーズで応答' },
      { lbl: '締め',    txt: '위아원！ ウィアウォン！' },
      { lbl: '覚えて！', txt: 'EXOコールの中で最重要曲。サビは必ず全員唱和！' },
    ],
  },
  {
    n: '20', title: "Baby Don't Cry", vid: 'Qx1V-GRT0Fw',
    chant: [
      { lbl: '備考', txt: 'バラード。静聴して一緒に口ずさむのが定番' },
    ],
  },
  {
    n: '21', title: 'Walk On Memories', vid: 'E-UTLImG0ss',
    chant: [
      { lbl: '備考', txt: 'ミッドテンポ。サビで一緒に口ずさみ、EXO！コール' },
    ],
  },
  {
    n: '22', title: "Don't Go", vid: 'xtzi4jdpKhI',
    chant: [
      { lbl: '備考', txt: '感情的なバラード。静聴＋サビで一緒に歌う' },
    ],
  },
  {
    n: '23', title: 'EL DORADO', vid: 'WhWNDc2_0Xo',
    chant: [
      { lbl: '全体',   txt: '壮大なオーケストラ曲。ブレイクでEXO！コール' },
      { lbl: 'サビ',   txt: 'サビはファン全員で唱和' },
    ],
  },
  {
    n: '24', title: 'Back It Up', vid: 'nGG42t7pm5Y',
    chant: [
      { lbl: '備考', txt: 'REVERXE新曲。ダンストラック。ブレイクでEXO！＋手拍子' },
    ],
  },
  {
    n: '25', title: 'Forever', vid: 'iWsw98mCssg',
    chant: [
      { lbl: '備考', txt: 'バラード。静聴してサビで一緒に歌う' },
    ],
  },
  {
    n: '26', title: 'Crown', vid: 'BWfKkqo1Mk8',
    chant: [
      { lbl: 'サビ',      txt: 'Crown！クラウン！（エコーコール）' },
      { lbl: 'EXOコール', txt: 'EXO！コール（ブレイク部分）' },
      { lbl: '備考',      txt: '公式ファンチャントあり（@EXOGlobal で公開済み）' },
    ],
  },
  {
    n: '27', title: 'Back Pocket', vid: 'BCRbKttp5YY',
    chant: [
      { lbl: '備考', txt: 'REVERXE新曲。サビでEXO！＋手拍子' },
    ],
  },
  {
    n: '28', title: 'Paradise', vid: 'yFbK03_tPaM',
    chant: [
      { lbl: '全体', txt: '穏やかなポップバラード。サビで口ずさみ、EXO！コール' },
    ],
  },
  {
    n: '29', title: 'Flatline', vid: '2fGLkavJYA8', encore: true,
    chant: [
      { lbl: 'アンコール1', txt: 'REVERXE新曲のロック調曲。サビで一緒に歌い、EXO！コール' },
    ],
  },
  {
    n: '30', title: 'Angel', vid: '9uSkhlKNKSY', encore: true,
    chant: [
      { lbl: 'メンバー',   txt: 'スホ！チャンヨル！ディオ！カイ！セフン！レイ！EXO！' },
      { lbl: 'サビ',      txt: '「너의 세상으로（ノエ セサンウロ）」を全員で大合唱！' },
      { lbl: '締め',      txt: '위아원！ ウィアウォン！ — コンサート最後の掛け声' },
      { lbl: '演出',      txt: 'ペンライトを高く掲げながら歌う。感動のフィナーレ！' },
    ],
  },
];

/* ── セットリスト + コールアコーディオン生成 ── */
function buildSetlist() {
  const grid = document.getElementById('exo-setlist-grid');
  if (!grid) return;

  EXO_SETLIST.forEach(song => {
    const item = document.createElement('div');
    item.className = 'sl-item' + (song.encore ? ' sl-encore-song' : '');

    /* メイン行 */
    const row = document.createElement('div');
    row.className = 'sl-row';

    const ytLink = document.createElement('a');
    ytLink.className = 'sl-yt';
    ytLink.href = 'https://www.youtube.com/watch?v=' + song.vid;
    ytLink.target = '_blank';
    ytLink.rel = 'noopener noreferrer';
    ytLink.innerHTML =
      '<span class="sl-num">' + song.n + '</span>' +
      '<span class="sl-title">' + song.title +
      (song.encore ? ' <span class="sl-encore-badge">ENC</span>' : '') +
      '</span>';

    const btn = document.createElement('button');
    btn.className = 'sl-toggle';
    btn.textContent = 'コール ▼';
    btn.setAttribute('aria-expanded', 'false');

    row.appendChild(ytLink);
    row.appendChild(btn);

    /* コールパネル */
    const panel = document.createElement('div');
    panel.className = 'sl-chant';

    song.chant.forEach(c => {
      const r = document.createElement('div');
      r.className = 'sl-chant-row';
      r.innerHTML =
        '<span class="sl-chant-lbl">' + c.lbl + '</span>' +
        '<span class="sl-chant-txt">' + c.txt + '</span>';
      panel.appendChild(r);
    });

    btn.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      btn.textContent = open ? 'コール ▲' : 'コール ▼';
      btn.setAttribute('aria-expanded', String(open));
    });

    item.appendChild(row);
    item.appendChild(panel);
    grid.appendChild(item);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildSetlist);
} else {
  buildSetlist();
}
