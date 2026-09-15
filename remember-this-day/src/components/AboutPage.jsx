import './AboutPage.css'

export default function AboutPage(){

    return(
        <div className='aboutBackground'>
            <div className='aboutPage'>
                <div className='aboutIntro'>
                    <h1>About Positivity Journaling</h1>
                    <p>Lots of research has been done on the positive effects of journaling!
                        I have listed some in the table below: </p>
                </div>
                <table className='aboutTable'>
                    <tr>
                        <th>Aspect of life</th>
                        <th>Benefit of journaling on that aspect</th>
                    </tr>
                    <tr>
                        <td>Physical</td>
                        <td>
                            <ul>
                                <li><a href='https://psycnet.apa.org/doiLanding?doi=10.1037%2Fxge0000374'>Studies</a> have shown that journaling can help you fall asleep faster at night by reducing bedtime worry</li>
                                <li><a href='https://www.ovid.com/jnls/bsam/abstract/10.1097/psy.0000000000000316~pilot-randomized-study-of-a-gratitude-journaling?redirectionsource=fulltextview'>
                                Studies</a> have shown that gratitude journaling and writing can help reduce inflammation and improve immune function</li>
                                <li><a href='https://mental.jmir.org/2018/4/e11290/'>Research</a> done on positive affect journaling has linked it to decreased levels of depression and anxiety, with all the associated physical effects</li>
                            </ul>
                        </td>               
                    </tr>
                    <tr>
                        <td>Mental</td>
                        <td>
                            <ul>
                                <li>Expressive writing has been <a href='https://www.thepermanentejournal.org/doi/10.7812/TPP/19.056'>shown</a> to help reduce stress</li>
                                <li><a href='https://link.springer.com/article/10.1007/s10879-014-9292-x'>Studies</a> have shown that PTSD symptoms in individuals have decreased after narrative writing interventions</li>
                                <li>Researchers have found that expressive writing practices promote <a href='https://psycnet.apa.org/doiLanding?doi=10.1037%2Femo0000121'>self-distancing</a> , which decreases emotional reactivity</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Emotional</td>
                        <td>
                            <ul>
                                <li><a href='https://www.mdpi.com/1660-4601/18/16/8876'>Reflective practice journaling</a> has been shown to increase self-confidence, self-knowledge, and coping skills</li>
                                <li>Journaling has <a href='https://www.mdpi.com/2227-9032/10/9/1762'>even been</a> shown to increase self-efficacy and a greater sense of self control</li>
                                <li>Researchers have also <a href='https://www.researchinpsychotherapy.org/index.php/rpsy/article/view/378'>found</a> that self-writing can increase self awareness and emotional intelligence</li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <p id='aboutWrapUp'>In addition to the above listed benefits,
                    this specific type of journal is designed to help keep you focused on positive things. 
                    Research has shown that negative experiences are generally more cognitively and emotionally impactful than positive ones.
                    By focusing on the good in your life you can fight against this negativity bias and take control of your own happiness!</p>
            </div>
        </div>
    )
}

