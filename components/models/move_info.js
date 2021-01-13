export class MoveInfo {
  constructor(attributes) {
    Object.assign(this, attributes)
  }

  get to_sfen() {
    let v = null
    if (this.type === "move") {
      v = this.from.place.to_sfen + this.to.place.to_sfen // 7g7f
    } else if (this.type === "promotable") {
      v = this.from.place.to_sfen + this.to.place.to_sfen + (this.to.promoted ? "+" : "") // 7g7f+
    } else if (this.type === "put") {
      v = this.to.piece.key + "*" + this.to.place.to_sfen // P*7g
    } else {
      throw new Error("must not happen")
    }
    return v
  }

  // ☗7六歩(77)
  to_custom_kif(options = {}) {
    options = {
      location: true,
      from: true,
      ...options,
    }
    let v = null
    let from = ""
    if (this.type === "move") {
      v = this.from.name
      if (options.from) {
        from = this.__from_xy
      }
    } else if (this.type === "promotable") {
      v = this.from.name + (this.to.promoted ? "成" : "不成")
      if (options.from) {
        from = this.__from_xy
      }
    } else if (this.type === "put") {
      v = this.to.name + "打"
    } else {
      throw new Error("must not happen")
    }
    return [options.location ? this.to.location.name : "", this.__to_xy, v, from].join("")
  }

  // ☗7六歩(77)
  get to_kif() {
    return this.to_custom_kif()
  }

  // ☗7六歩
  get to_kif_without_from() {
    return this.to_custom_kif({from: false})
  }

  // private

  get __from_xy() {
    return ["(", this.from.place.digit_human, ")"].join("")
  }

  get __to_xy() {
    // return [this.to.place.kanji_human_x, this.to.place.kanji_human_y].join("")
    return [this.to.place.human_x, this.to.place.kanji_human_y].join("")
  }
}

if (process.argv[1] === __filename) {
}