type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fishe';

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fishe: false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}