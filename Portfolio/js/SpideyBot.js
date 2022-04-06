function SendMsg(){
    var Name = document.getElementById('name').value
    var Email = document.getElementById('email').value
    var Subject = document.getElementById('subject').value
    var Message = document.getElementById('message').value
    const req = new XMLHttpRequest()
    req.open('POST','Discord Webhook URL')
    req.setRequestHeader('Content-type','application/json')
    const params={
        username :'Spidey Bot',
        content : 'Name : '+Name+'\nEmail : '+Email+'\nSubject : '+Subject+'\nMessage : '+Message
    }
    req.send(JSON.stringify(params))
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('message').value = ''
    console.log(Name)
    }
