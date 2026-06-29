{
    name: "kabutopsinite",
        spritenum: 666,
    megaStone: "Kabutops-Mega",
    megaEvolves: ["Kabutops"],
    itemUser: ["Kabutops"],
    onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
},
    num: -999,
        gen: 5,
    isNonstandard: "Past"
}