module.exports=`
doctype html
html(lang="en")
    head
        title= pageTitle
        script(type='text/javascript').
         if (foo) bar(1 + 5)
    body
        h1 Pug - node template engine
        h2 #{name}
`
