// -*- compile-command: "babel-node sfen.js" -*-

var XRegExp = require('xregexp')
import { Piece } from './piece'
import { Board } from './board'
import { Point } from './point'

// console.log(Piece.foo())

class Sfen {
  constructor () {
    this.kifu_body = null
    this.attributes = null
  }

  parse () {
    this.kifu_body = this.kifu_body.replace(/startpos/, "sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1")
    const regex = XRegExp("sfen\\s+(?<sfen>\\S+)\\s+(?<b_or_w>\\S+)\\s+(?<hold_pieces>\\S+)\\s+(?<turn_counter_next>\\d+)(\\s+moves\\s+(?<moves>.*))?")
    this.attributes = XRegExp.exec(this.kifu_body, regex)
    if (process.env.NODE_ENV !== 'production') {
      console.table(this.attributes)
    }
  }

  field () {
    let field = {}
    this.attributes["sfen"].split("/").forEach((e, y) => {
      let x = 0
      XRegExp.forEach(e, XRegExp("(?<promoted>\\+?)(?<piece>\\S)"), (m, i) => {
        if (/\d+/.test(m.piece)) {
          x += Number(m.piece)
        } else {
          let battler = {
            pos: new Point([x, y]),
            piece: Piece.fetch(m.piece),
            promoted: (m.promoted === '+'),
            location: this.__location_by(m.piece),
          }
          field[battler.pos] = battler
          x += 1
        }
      })
    })
    return field
  }

  location () {
    if (this.attributes["b_or_w"] === "b") {
      return "black"
    } else {
      return "white"
    }
  }

  hold_pieces () {
    const counts = {}
    if (this.attributes["hold_pieces"] !== "-") {
      console.log(this.attributes["hold_pieces"])
      XRegExp.forEach(this.attributes["hold_pieces"], XRegExp("(?<count>\\d+)?(?<piece>\\S)"), (m, i) => {
        const piece = Piece.fetch(m.piece)
        const count = Number(m.count || 1)
        const location = this.__location_by(m.piece)
        if (counts[location] === undefined) {
          counts[location] = {}
        }
        counts[location][piece.key] = (counts[location][piece.key] || 0) + count
      })
    }
    return counts
  }

  turn_counter_next() {
    return Number(this.attributes["turn_counter_next"])
  }

  turn_counter_base() {
    return this.turn_counter_next() - 1
  }

  turn_counter_max() {
    return this.turn_counter_base() + this.move_infos().length
  }

  komaochi_p() {
    return (this.turn_counter_next() % 2) === 1 && this.location() == "white"
  }

  location_of(offset) {
    const index = this.turn_counter_next() + offset
    let retval = null
    if ((index % 2) === 1) {
      retval = "black"
    } else {
      retval = "white"
    }
    return retval
  }

  move_infos () {
    if (this.attributes["moves"] === undefined) {
      return []
    }
    return this.attributes["moves"].split(/\s+/).map((e, i) => {
      const attrs = {}
      attrs["scene_index"] = this.turn_counter_base() + i
      attrs["scene_offsert"] = i
      attrs["location"] = this.location_of(i)
      const md = XRegExp.exec(e, XRegExp("(?<origin_x>\\S)(?<origin_y>\\S)(?<pos_x>\\S)(?<pos_y>\\S)(?<promoted>\\+?)?"))
      attrs["promoted_trigger"] = (md.promoted === "+")
      if (md["origin_y"] === "*") {
        attrs["stroke_piece"] = Piece.fetch(md["origin_x"])
      } else {
        attrs["origin_pos"] = new Point(`${md["origin_x"]}${md["origin_y"]}`)
      }
      attrs["pos"] = new Point(`${md["pos_x"]}${md["pos_y"]}`)
      return attrs
    })
  }

  __location_by (v) {
    if (/[A-Z]/.test(v)) {
      return "black"
    } else {
      return "white"
    }
  }
}

export { Sfen }

if (process.env.NODE_ENV !== 'production') {
  console.log(process.argv)
  console.log(process.argv[0])
  console.log(process.argv[1])
  console.log(require.main)
  console.log(require.main.filename)
  console.log(__filename)
}

if (require.main.filename) {
  let sfen = new Sfen()
  sfen.kifu_body = "position sfen +lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b S2s 1 moves 7i6h S*2d"
  sfen.parse()
  // console.log(sfen.field())
  // console.log(sfen.location())
  console.log(sfen.hold_pieces())
  // console.log(sfen.move_infos())
}
