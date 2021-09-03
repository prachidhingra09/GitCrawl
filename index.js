import fetch from 'node-fetch'

function getData() {
	return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

getData.getRepo = ((name) => {
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

export default getData;