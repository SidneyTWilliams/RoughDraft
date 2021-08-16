import { extendObservable } from "mobx";

import (extendObservable)

class Userstore {
    constructor() {
        extendObservable(this,{

            loading: true,
            isLoggedin: false,
            username: ''
        })
    }
}

export default new Userstore();