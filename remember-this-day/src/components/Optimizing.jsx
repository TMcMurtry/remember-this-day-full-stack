import './Optimizing.css'

export default function Optimizing(){

    return(
        <div className='optimizing'>
            <h1>About</h1>
            <img src='./images/Person-journaling.jpg' alt='Image of a person journaling'id='journalingImage'></img>
            <p id='p1'>The point of this application is to keep positivity in the forefront of your mind! 
                So the first step in this process is to use the journal entry submission form to write about good things that happen to you throughout the day
                or good things that you remember previously happening to you! Do this as often as possible because you will want lots of entries for the next part.
                 Remember, this specific journal is meant for good things only, and if you are having a hard time thinking of good things to write about, 
                 you can push the button in the entry page that says "View Writing Prompts". It helps to be specific about what made you happy and why, because you will be looking back on this entry. 
                </p>
            <img src='./images/Person-reading.jpg' alt='Image of a person reading' id='readingImage'></img>
            <p id='p2'>The second step in this process is to remember the good times! Whether you are having a rough day and need a little pick me up,
                or if you just want to relive a happy memory for a moment, press the "View Past Entry" in the entry page, and a previously submitted entry will appear. 
                Take a minute to really relive the memory and see if it can't put you in a little bit of a happier mood.  </p>
            <div id='p3'>
                <h3>Important Note!</h3>
                <p >It is important to remember that you're human and we all have ups and downs. If you're having a really bad day and nothing can seem to cheer you up, that's alright.
                    The point isn't to be perfectly cheerful all the time. The point is that happiness is a choice, and this app is designed to be a tool to make that choice a little bit easier!
                </p>
            </div>
            <img src='./images/Happy-person.jpg' alt="Image of a happy child" id='happyPerson'></img>
        </div>
    )
}
