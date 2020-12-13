import MemoryRecord from "js-memory-record"

export default class KifuSampleInfo extends MemoryRecord {
  static get define() {
    return [
      { black: "先手",     white: "後手",     sfen: "position startpos" },
      { black: "鈴木英春", white: "小池重明", sfen: "position startpos moves 7g7f 3c3d 3i4h 5c5d 5i6h 8b5b 6h7h 5a6b 4g4f 6b7b 4h4g 7b8b 4i5h 5d5e 7i6h 7a7b 9g9f 9c9d 6h7g 6c6d 7g6f 7b6c 3g3f 7c7d 2h3h 6d6e 6f7g 8a7c 7g6h 6a7b 3f3e 3d3e 3h3e 5b3b P*3d 4a5b 2i3g 1c1d 3e3f 2c2d 4f4e 3a4b 4g4f 5e5f 8h2b+ 3b2b B*8h 2b1b 3f2f P*3f 2f3f 5f5g+ 4f5g B*2h 1i1h 2h1i+ 3f2f 1b1c 2f2d P*2c 3g2e 2c2d 2e1c 1a1c R*1a R*3i 1a2a+ 3i3d+ 9f9e 1i1h 9e9d P*9b P*3c L*3a N*2c 3a3c 2c3a+ 4c4d 4e4d 1h2g 3a3b 2g5d 2a2b P*4a P*5c 5d5c 3b4a N*6d P*5d 6c5d 4a4b 5c4b 8h9g P*3b S*6a 5b6b 6a7b+ 6b7b P*5c 4b5c 2b3b P*4b 3b4a N*7a 6h7g 5d6c 4a5a S*6b 5a1a 5c4d 9g8f 7c8e 5g6h 3d3i P*5i 3c3h+ 1a3a 3i4i P*4e 4d5c 3a3c 3h4h 5h4h 4i4h 3c5c 6b5c B*2f 4h6h 6i6h P*5b L*5h S*8d 5h5c+ 5b5c 2f5c+ G*6b 8f6d 6c6d 5c6d B*7c 6d8f R*1h R*5h 1h5h+ 5i5h R*4i G*6i 7c4f S*5g 4f2h+ P*3g L*5a R*3a 5a5g+ 5h5g P*5h 6h5h 8e7g+ 8f7g S*6c L*9h 4i4f+ S*5f S*6d N*8f P*5e 5h4g 4f2f 5f5e 6d5c 4g4h 2h3i 4h5h 2f2h 7g6h 3i3h 8i7g 2h3g 3a3g+ 3h3g 5g5f 7d7e 7g6e 7e7f N*7d 8b8a P*7c 8d7c 7d6b+ 5c6b 9d9c+ 9b9c P*9b 9a9b 5e6f 7c8b R*3c 3g6d 3c1c+ N*8e G*8h P*5g 5h5g R*3h L*9f 7f7g+ 8h7g 8e7g+ 7h7g P*7f 7g7f 3h6h+ 6i6h B*8h P*7e P*7d 7e7d P*7e" },
      { black: "小池重明", white: "大田学",   sfen: "position startpos moves 7g7f 8c8d 7i7h 3c3d 6g6f 8d8e 8h7g 7a6b 2h6h 5a4b 5i4h 4b3b 3i3h 5c5d 6i5h 6a5b 4h3i 3a4b 4g4f 7c7d 3i2h 1c1d 1g1f 4b5c 5g5f 6b7c 9g9f 7c8d 6f6e 2b7g+ 7h7g 4c4d 3g3f 8d7c 5h4g 4a4b 2i3g 2a3c 2g2f 5b4c 3h2g 6c6d 6e6d 7c6d 4i3h P*6g 6h8h 8a7c P*6f 9c9d 1i1h 2c2d 9i9g 8b8d 8h5h 8e8f 8g8f B*8g 5h5i 6g6h+ 7g6h 8g7f+ 6h7g 7f6g 1f1e P*8h 7g8h 8d8f P*8g 8f6f 1e1d 6g6h 5i1i 7c6e 1d1c+ 3b4a B*6c 4b5b 6c7d+ 6e5g+ 8h7g 6h7g 8i7g 5g4g B*2c 4a5a 7d8d 5a6a 8d6f 4g3h 2g3h 3d3e R*8a G*7a 8a9a+ S*8b P*7b 6a7b P*7c 6d7c P*7d 7c7d 2c4a+ 4c4b 4a5b 4b5b P*7c 7b6c N*7e 6c7c G*8c" },
      { black: "平畑善介", white: "三崎巖",   sfen: "position startpos moves 7g7f 8c8d 5g5f 5c5d 2g2f 8d8e 2f2e 4a3b 8h7g 3c3d 7i8h 7a6b 3i4h 6b5c 2e2d 2c2d 2h2d 8e8f 8g8f P*8g 2d2b+ 3a2b 8h8g 2b3c 4i3h 7c7d 3g3f 4c4d 5i4i 6a5b 4g4f 5b4c 4i3i 5c6d 4f4e 4d4e B*7a 8b7b 7a2f+ 5d5e 5f5e 3c4d 5e5d P*5e P*4f 2a3c 4f4e 4d4e 2i3g 4e5d P*4d 4c5c P*2d P*2b 8f8e 9c9d 8g7h P*4c 2f1f 1c1d P*5f 1d1e 1f2g 4c4d 3f3e 5d4c 8e8d 7b8b 5f5e 8a7c 5e5d 4c5d 3e3d 3c4e 3g4e 5d4e 3d3c+ 7c6e 7g6f P*3g 4h3g P*3f 3g3f 4e3f 2g3f 3b3c P*5d 5c4c P*4e S*5e 8d8c+ 8b3b 6f8d 5a4a N*3e N*4f 3h3g P*3h 3i2h R*4i S*4h 3h3i+ 4h3i 7d7e 3f2g 3c2d 2g4i 3b3e P*3f 3e3d 4i2g N*2e 3g4g 1e1f R*6a 4a3b 6a1a+ P*3e 8d5a+ 4c4b P*2c 3b4c 4e4d 3d4d P*4e 4d4e 3f3e 1f1g+ 1i1g 2e1g+ 2h1g P*1f 1g2h L*2e N*2f 2e2f 2g2f N*2e P*1h 2d3e 5a4b 4c4b 2f1e P*3c L*3f 6e5g+ 3f3e 4e3e 4g3f 3e3f 1a2b 4b4c 1e2e L*3d 2e3f 3d3f R*4a 4c5d 2b5b P*5c 5b4c 5d6e 8i7g 6e5f 4c4e" },
    ]
  }

  get name() {
    return `${this.black} vs ${this.white}`
  }
}

if (process.argv[1] === __filename) {
  console.log(KifuSampleInfo.fetch("simple").key)
  console.log(KifuSampleInfo.fetch("simple").name)
}
