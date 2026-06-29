{
  name: "flygonite",
  spritenum: 666,
  megaStone: "Flygon-Mega",
  megaEvolves: ["Flygon"],
  itemUser: ["Flygon"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}