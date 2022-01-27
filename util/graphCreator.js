const originObj = {
    'id': 'matchId',
    'user': {
        'id': 'userId',
        'fullName': 'fullName',
        'email': 'email'
    },
    'position': {
        'id': 'positionId',
        'name': 'name',
        'status': 'status'
    },
    'score': 'score'
}

const graphCreator = (data) => {
    let match = {}
    let user = {}
    let position = {}
    for (const [key, value] of Object.entries(originObj)) {
        if (typeof value === 'object') {
            if (data[key] && key === 'user') {
                for (const [ky, val] of Object.entries(value)) {
                    if (data[val]) {
                        user[ky] = 'doutdes'
                    }
                }
            } else {
                if (data[key] && key === 'position') {
                    for (const [ky, val] of Object.entries(value)) {
                        if (data[val]) {
                            position[ky] = 'doutdes'
                        }
                    }
                }
            }
        } else {
            if(data[value]) {
                match[key] = 'doutdes'
            }
        }
    }

    let total =''
    if (Object.keys(user).length > 0 && Object.keys(position).length > 0) {
        let userJson = JSON.stringify(user)
        let positionJson = JSON.stringify(position)
        if (Object.keys(match).length > 0) {
            let matchJson = JSON.stringify(match)
            let newMatchJson = matchJson.replaceAll(/[{}]/g, '')
            total = `{"match":{${newMatchJson},"user":${userJson}, "position":${positionJson}}}`
        } else {
            total = `{"match":{"user":${userJson}, "position":${positionJson}}}`
        }
    } else if(Object.keys(user).length > 0) {
        let userJson = JSON.stringify(user)
        if (Object.keys(match).length > 0) {
            let matchJson = JSON.stringify(match)
            let newMatchJson = matchJson.replaceAll(/[{}]/g, '') 
            total = `{"match":{${newMatchJson},"user":${userJson}}}`
        } else {
            total = `{"match":{"user":${userJson}}}`
        }
    } else if(Object.keys(position).length > 0) {
        let positionJson = JSON.stringify(position)
        if (Object.keys(match).length > 0) {
            let matchJson = JSON.stringify(match)
            let newMatchJson = matchJson.replaceAll(/[{}]/g, '')
            total = `{"match":{${newMatchJson}, "position":${positionJson}}}`
        } else {
            total = `{"match":{"position":${positionJson}}}`
        }
    } else {
        if (Object.keys(match).length > 0) {
            let matchJson = JSON.stringify(match)
            let newMatchJson = matchJson.replaceAll(/[{}]/g, '') 
            total = `{"match":{${newMatchJson}}}`
        } else {
            total = `{"match":{}}`
        }
    }
  return {
    total
  }
};

export default graphCreator;
