/*// number, string, boolean, null, undefined, any

const o1: number = 20; // NaN Infinity
const o2: string = 'Hello';
const o3: boolean = true;
const o4: null = null;
const o5: undefined = undefined;
const o6: any = true;

function o7(a: number, b: string, c: boolean): string {
    return 'qwe';
}

const o8 = (a: number, b: string, c: boolean): string => {
    return 'qwe';
}

// type, interface

const o9: User2 = { name: 'Alex', age: 20 };

type User = {
    name: string,
    age: number,
    car: { color: string }
};

interface  User2 {
    name: string,
    age: number,
    car?: { color: string }
}

const o10: User2 = { name: 'Alex', age: 20, car: { color: 'red' } };

const o11: string[] = ['123', '324', '432'];
const o12: Array<string> = ['123', '324', '432'];*/

type o13_Config = {
  status: string;
};

type o13_GetMoreInfo = {
  data: number;
}

type o13 = {
    name: string;
    age: number;
    hasJob: boolean;
    getMoreInfo?: (config: o13_Config) => o13_GetMoreInfo | null;
}

const o13: Array<o13> = [
    {
        name: 'Alex',
        age: 20,
        hasJob: true,
        getMoreInfo: (config) => {
            return { data: 1231414124 }
        }
    },

    {
        name: 'Sam',
        age: 23,
        hasJob: false,
    }
]

// union - возвращается либо одно, либо второе, intersection - когда два типа склеиваем в один

function o14(config): { data: number } | null | undefined {
    if (config.status === 'ok') {
        return { data: 1231414124 }
    }
    else if (config.status === 'false') {
        return undefined;
    }
    return null;
}

function o15(config): string | number{
    if (config.status === 'ok') {
        return '2131231231'
    }
    else if (config.status === 'false') {
        return undefined;
    }
    return 32;
}

const age = o15();

if (typeof age === 'string') {
    age.charAt(213123);
}
else if (typeof age === 'number') {
    age.toFixed(2);
}