export class TypeInfo {
    public types: Object = {
        normal: {
            se_against: [],
            ne_against: ['rock','steel'],
            res_to: [],
            weak_to: ['fighting'],
            half_from: ['ghost'],
            half_to: ['ghost']
        },
        fighting: {
            se_against: ['dark','ice','normal','rock','steel'],
            ne_against: ['bug','fairy','flying','poison','psychic'],
            res_to: ['bug','dark','rock'],
            weak_to: ['fairy','flying','psychic'],
            half_from: [],
            half_to: ['ghost']
        },
        flying: {
            se_against: ['bug','fighting','grass'],
            ne_against: ['electric','rock','steel'],
            res_to: ['bug','fighting','grass'],
            weak_to: ['electric','ice','rock'],
            half_from: ['ground'],
            half_to: []
        },
        poison: {
            se_against: ['grass','fairy'],
            ne_against: ['ghost','ground','poison','rock'],
            res_to: ['bug','fairy','fighting','grass','poison'],
            weak_to: ['ground','psychic'],
            half_from: [],
            half_to: ['steel']
        },
        ground: {
            se_against: ['electric','fire','poison','rock','steel'],
            ne_against: ['bug','grass'],
            res_to: ['poison','rock'],
            weak_to: ['grass','ice','watter'],
            half_from: ['electric'],
            half_to: ['flying']
        },
        rock: {
            se_against: ['bug','fire','flying','ice'],
            ne_against: ['fighting','ground','steel'],
            res_to: ['fire','flying','normal','poison'],
            weak_to: ['fighting','grass','ground','steel','water'],
            half_from: [],
            half_to: []
        },
        bug: {
            se_against: ['psychic','grass','dark'],
            ne_against: ['fighting','fire','flying','ghost','poison','steel','fairy'],
            res_to: ['fighting','grass','ground'],
            weak_to: ['fire','flying','rock'],
            half_from: [],
            half_to: []
        },
        ghost: {
            se_against: ['ghost','psychic'],
            ne_against: ['dark'],
            res_to: ['bug','poison'],
            weak_to: ['ghost','dark'],
            half_from: ['normal','fighting'],
            half_to: ['normal']
        },
        steel: {
            se_against: ['fairy','ice','rock'],
            ne_against: ['electric','fire','steel','water'],
            res_to: ['bug','dragon','fairy','flying','grass','ice','normal','psychic','rock','steel'],
            weak_to: ['fighting','fire','ground'],
            half_from: ['poison'],
            half_to: []
        },
        fire: {
            se_against: ['bug','grass','ice','steel'],
            ne_against: ['dragon','fire','rock','water'],
            res_to: ['bug','fairy','fire','grass','ice','steel'],
            weak_to: ['ground','rock','water'],
            half_from: [],
            half_to: []
        },
        water: {
            se_against: ['fire','ground','rock'],
            ne_against: ['dragon','grass','water'],
            res_to: ['fire','ice','steel','water'],
            weak_to: ['electric','grass'],
            half_from: [],
            half_to: []
        },
        grass: {
            se_against: ['ground','rock','water'],
            ne_against: ['bug','dragon','fire','flying','grass','poison','steel'],
            res_to: ['electric','grass','ground','water'],
            weak_to: ['bug','fire','flying','ice','poison'],
            half_from: [],
            half_to: []
        },
        electric: {
            se_against: ['flying','water'],
            ne_against: ['dragon','electric','grass'],
            res_to: ['electric','flying','steel'],
            weak_to: ['ground'],
            half_from: [],
            half_to: ['ground']
        },
        psychic: {
            se_against: ['fighting','poison'],
            ne_against: ['psychic','steel'],
            res_to: ['fighting','psychic'],
            weak_to: ['bug','dark','ghost'],
            half_from: [],
            half_to: ['dark']
        },
        ice: {
            se_against: ['dragon','flying','grass','ground'],
            ne_against: ['fire','ice','steel','water'],
            res_to: ['ice'],
            weak_to: ['fighting','fire','rock','steel'],
            half_from: [],
            half_to: []
        },
        dark: {
            se_against: ['ghost','psychic'],
            ne_against: ['dark','fighting','fairy'],
            res_to: ['dark','ghost'],
            weak_to: ['bug','fighting','fairy'],
            half_from: ['psychic'],
            half_to: []
        },
        dragon: {
            se_against: ['dragon'],
            ne_against: ['steel'],
            res_to: ['electric','fire','grass','water'],
            weak_to: ['dragon','ice','fairy'],
            half_from: [],
            half_to: ['fairy']
        },
        fairy: {
            se_against: ['dark','dragon','fighting'],
            ne_against: ['fire','poison','steel'],
            res_to: ['bug','dark','fighting'],
            weak_to: ['poison','steel'],
            half_from: ['dragon'],
            half_to: []
        }
    };
}

export class Type {
    se_against: Array<string>;
    ne_against: Array<string>;
    res_to: Array<string>;
    weak_to: Array<string>;
    half_from: Array<string>;
    half_to: Array<string>;
}
