import fetch from 'node-fetch'

function getData() {
	return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

getData.getUserInfo = ((name) => {
    return new Promise((done, err) => {
        if(typeof name === 'undefined') {
            err('You forgot to provide User Name')
        } else {
            fetch(`https://api.github.com/users/${name}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry, Error: ` + error))
        }
    })
})

getData.getRepos = ((name) => {
    return new Promise((done, err) => {
        if(typeof name === 'undefined') {
            err('You forgot to provide User Name')
        } else {
            fetch(`https://api.github.com/users/${name}/repos`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry, Error: ` + error))
        }
    })
})
getData.getFollowers = ((name) => {
    return new Promise((done, err) => {
        if(typeof name === 'undefined') {
            err('You forgot to provide User Name')
        } else {
            fetch(`https://api.github.com/users/${name}/followers`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry, Error: ` + error))
        }
    })
})

getData.getOrgDetail = ((name) => {
    return new Promise((done, err) => {
        if(typeof name === 'undefined') {
            err('You forgot to provide User Name')
        } else {
            fetch(`https://api.github.com/orgs/${name}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry, Error: ` + error))
        }
    })
})

getData.getOrgRepos = ((name) => {
    return new Promise((done, err) => {
        if(typeof name === 'undefined') {
            err('You forgot to provide User Name')
        } else {
            fetch(`https://api.github.com/orgs/${name}/repos`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry, Error: ` + error))
        }
    })
})

export default getData;