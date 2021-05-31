class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("Name")
        this.button = createButton("START")
        this.greeting = createElement("h2")
    }
    hidden(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
       
        this.title.html("Car Racing")
        this.title.position(130,0)
       
        this.input.position(130,160)
       
        this.button.position(230,200)
        this.button.mousePressed(()=>{
            this.button.hide()
            this.input.hide()
             player.name = this.input.value()
            playerCount+=1
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateInfo()
           
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(130,160)
            
        })
    }
}