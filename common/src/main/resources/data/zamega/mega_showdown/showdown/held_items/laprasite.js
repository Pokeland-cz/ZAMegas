{
  name: "laprasite",
  spritenum: 666,
  megaStone: "Lapras-Mega",
  megaEvolves: ["Lapras"],
  itemUser: ["Lapras"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}