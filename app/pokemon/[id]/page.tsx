import ReturnPokemonIndividual from '@/components/getPokemonIndividual';
import ViewModeIndividual from '@/components/viewButtonIndividual';

export async function generateStaticParams() {
  return [
    { id: 'tinkatuff' },
    { id: 'pignite' },
    { id: 'stunfisk' },
    { id: 'roselia' },
    { id: 'poliwhirl' },
    { id: 'lickitung' },
    { id: 'ditto' },
    { id: 'staryu' },
    { id: 'wingull' },
    { id: 'plusle' },
    { id: 'vulpix' },
    { id: 'sunflora' },
    { id: 'wartortle' },
    { id: 'heatmor' },
    { id: 'whirlipede' },
    { id: 'delibird' },
    { id: 'loudred' },
    { id: 'impidimp' },
    { id: 'dragonair' },
    { id: 'murkrow' },
    { id: 'cherrim' },
    { id: 'clefairy' },
    { id: 'poipole' },
    { id: 'pawniard' },
    { id: 'lumineon' },
    { id: 'dustox' },
    { id: 'shellos' },
    { id: 'chingling' },
    { id: 'glimmet' },
    { id: 'gastly' },
    { id: 'silvally-flying' },
    { id: 'volbeat' },
    { id: 'anorith' },
    { id: 'cufant' },
    { id: 'morgrem' },
    { id: 'mienfoo' },
    { id: 'minun' },
    { id: 'lunatone' },
    { id: 'vulpix-alola' },
    { id: 'wormadam-plant' },
    { id: 'klang' },
    { id: 'spinda' },
    { id: 'raticate-alola' },
    { id: 'vibrava' },
    { id: 'flittle' },
    { id: 'frogadier' },
    { id: 'grotle' },
    { id: 'grookey' },
    { id: 'grovyle' },
    { id: 'quilladin' },
    { id: 'metang' },
    { id: 'mareanie' },
    { id: 'steenee' },
    { id: 'cacnea' },
    { id: 'pichu' },
    { id: 'tynamo' },
    { id: 'silvally-bug' },
    { id: 'shellder' },
    { id: 'nosepass' },
    { id: 'dewgong' },
    { id: 'gumshoos' },
    { id: 'lombre' },
    { id: 'pineco' },
    { id: 'staravia' },
    { id: 'vespiquen' },
    { id: 'seviper' },
    { id: 'krokorok' },
    { id: 'quaxwell' },
    { id: 'emolga' },
    { id: 'lopunny' },
    { id: 'lampent' },
    { id: 'ariados' },
    { id: 'ponyta-galar' },
    { id: 'voltorb' },
    { id: 'mawile' },
    { id: 'pikachu' },
    { id: 'fletchinder' },
    { id: 'eldegoss' },
    { id: 'kubfu' },
    { id: 'spidops' },
    { id: 'palpitoad' },
    { id: 'amaura' },
    { id: 'salandit' },
    { id: 'wooloo' },
    { id: 'hippopotas' },
    { id: 'drilbur' },
    { id: 'sudowoodo' },
    { id: 'bronzor' },
    { id: 'floragato' },
    { id: 'herdier' },
    { id: 'honedge' },
    { id: 'riolu' },
    { id: 'larvesta' },
    { id: 'wattrel' },
    { id: 'phione' },
    { id: 'furfrou' },
    { id: 'ivysaur' },
    { id: 'castform' },
    { id: 'carkol' },
    { id: 'tentacool' },
    { id: 'eelektrik' },
    { id: 'golett' },
    { id: 'yanma' },
    { id: 'gimmighoul' },
    { id: 'dratini' },
    { id: 'kirlia' },
    { id: 'wormadam-trash' },
    { id: 'mightyena' },
    { id: 'pyukumuku' },
    { id: 'marshtomp' },
    { id: 'swirlix' },
    { id: 'illumise' },
    { id: 'farfetchd-galar' },
    { id: 'togedemaru' },
    { id: 'wiglett' },
    { id: 'wynaut' },
    { id: 'vanillite' },
  ];
}

export default function PokemonPage({ params }: { params: { id: string } }) {
  const pokemonName = params.id;
  return <ViewModeIndividual pokemon={pokemonName}></ViewModeIndividual>;
}