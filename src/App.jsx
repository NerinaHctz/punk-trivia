import { useState, useEffect } from 'react'
import Question from './components/Question'
import Timer from './components/Timer'
import Result from './components/Result'
import MainPage from './components/MainPage'
// import './index.scss'

const questions = [
  {
    question: "¿En qué año se formó el punk en Reino Unido?",
    options: ["1976", "1980", "1970"],
    answer: "1976"
  },
  {
    question: "¿Quién es el líder de los Sex Pistols?",
    options: ["Sid Vicious", "Johnny Rotten", "Paul Cook"],
    answer: "Johnny Rotten"
  },
  {
    question: "¿Qué término describe el estilo de baile asociado al punk?",
    options: ["Mosh", "Skanking", "Pogo"],
    answer: "Pogo"
  },
  {
    question: "¿Dónde se formó la banda de punk Cicatriz?",
    options: ["En la cárcel", "En un instituto de música", "En un barrio de Madrid"],
    answer: "En la cárcel"
  },
  {
    question: "¿En qué ciudad surgió la banda The Clash?",
    options: ["Nueva York", "Londres", "Los Ángeles"],
    answer: "Londres"
  },
  {
    question: "¿Qué banda fue una de las primeras en representar el punk en España?",
    options: ["Eskorbuto", "Siniestro Total", "Extremoduro"],
    answer: "Eskorbuto"
  },
  {
    question: "¿Qué miembro de Rancid fue también parte de la banda Operation Ivy?",
    options: ["Lars Frederiksen", "Tim Armstrong", "Matt Freeman"],
    answer: "Tim Armstrong"
  },
  {
    question: "¿Qué movimiento feminista fue impulsado por la banda Bikini Kill?",
    options: ["Punk Femme", "Girl Power", "Riot Grrrl"],
    answer: "Riot Grrrl"
  },
  {
    question: '¿Qué álbum de The Ramones incluye la canción "Blitzkrieg Bop"?',
    options: ["Rocket to Russia", "Ramones", "End of the Century"],
    answer: "Ramones"
  },
  {
    question: '¿Qué significa el término "DIY" en la cultura punk?',
    options: ["Do It Yesterday", "Do It Young", "Do It Yourself"],
    answer: "Do It Yourself"
  },
  {
    question: '¿Cómo se llama el álbum debut de Siniestro Total, lanzado en 1982?',
    options: ["Siniestro Total", "El Rey del Pollo Frito", "¿Cuándo se Come aquí?"],
    answer: "Siniestro Total"
  },
  {
    question: '¿Qué famoso logo de los Misfits, conocido como "The Crimson Ghost", fue creado por el artista Erich M. "Eerie" Von?',
    options: ["El logo de la calavera", "El esqueleto con gafas", "El fantasma rojo"],
    answer: "El logo de la calavera"
  },
  {
    question: '¿A qué grupo versiona Las Vulpes con su canción Me Gusta Ser Una Zorra?',
    options: ["The Clash", "The Stooges", "Sex Pistols"],
    answer: "The Stooges"
  },
  {
    question: '¿Qué significan las siglas "CBGB" en el nombre del famoso club de Nueva York?',
    options: ["Country, Blue Grass, and Blues", "Classic Beats and Great Bands", "Contemporary Bands Going Beyond"],
    answer: "Country, Blue Grass, and Blues"
  },
  {
    question: '¿De dónde era la banda RIP, considerada una de las más influyentes del punk en España?',
    options: ["Madrid", "Mondragón", "Barakaldo"],
    answer: "Mondragón"
  },
  {
    question: '¿Qué miembro de The Stooges fue conocido por su estilo de guitarra agresivo y su influencia en el sonido de la banda?',
    options: ["Ron Asheton", "James Williamson", "Steve Mackay"],
    answer: "Ron Asheton"
  },
  {
    question: '¿En qué ciudad se formó la banda punk española Último Resorte?',
    options: ["Madrid", "Barcelona", "Valencia"],
    answer: "Valencia"
  },
  {
    question: '¿Cómo se llama la banda que hace versiones en estilo ranchero de las canciones de NOFX?',
    options: ["Los Rancheros del Punk", "Sin Efectos", "Punk Ranchero"],
    answer: "Sin Efectos"
  },
  {
    question: '¿Qué miembro de Kaka de Luxe se destacó por ser uno de los primeros en formar parte de la banda Alaska y los Pegamoides?',
    options: ["Carlos Berlanga", "Nacho Canut", "Eduardo Benavente"],
    answer: "Carlos Berlanga"
  },
  {
    question: '¿En qué ciudad se formó la banda The Cramps?',
    options: ["Nueva York", "San Diego", "Sacramento"],
    answer: "Sacramento"
  },
  {
    question: '¿Quién es el vocalista principal de la banda Dead Kennedys?',
    options: ["Jello Biafra", "Joe Strummer", "Johnny Rotten"],
    answer: "Jello Biafra"
  },
  {
    question: '¿Qué ocurrió con Kortatu en 1988, poco después de lanzar "Kolpez Kolpe"?',
    options: ["La banda se trasladó a Londres para grabar", "Se separaron debido a diferencias internas", "Empezaron a tocar en Estados Unidos"],
    answer: "Se separaron debido a diferencias internas"
  },
  {
    question: '¿Qué álbum de Green Day marcó su transición al punk más comercial en los años 90?',
    options: ["Insomniac", "American Idiot", "Dookie"],
    answer: "Dookie"
  },
  {
    question: '¿Cuál fue el primer álbum de Commando 9mm?',
    options: ["Dios Salve al Punk", "Contra el Sistema", "La Sombra del Futuro"],
    answer: "Dios Salve al Punk"
  },
  {
    question: '¿Qué significa "MC5", el nombre de la banda pionera del punk y del rock psicodélico?',
    options: ["Motor City 5", "Michigan City 5", "Midnight City 5"],
    answer: "Motor City 5"
  },
  {
    question: '¿Qué álbum de Agnostic Front es considerado uno de los pilares del hardcore punk en los años 80?',
    options: ["Cause for Alarm", "Victim in Pain", "One Voice"],
    answer: "Victim in Pain"
  },
  {
    question: '¿Qué álbum de Cocadictos incluye la famosa canción "Chico Cohete"?',
    options: ["Cocadictos", "Nadie Nos Parará", "Solo Para Locos"],
    answer: "Solo Para Locos"
  },
  {
    question: '¿Quién fue el vocalista original de Black Flag, conocido por su estilo agresivo y su influencia en el hardcore punk?',
    options: ["Henry Rollins", "Keith Morris", "Greg Ginn"],
    answer: "Keith Morris"
  },
  {
    question: '¿En qué año se separó la banda de punk Sin Dios?',
    options: ["1994", "1998", "1996"],
    answer: "1996"
  },
  {
    question: '¿Qué género musical se asocia principalmente con The Slits?',
    options: ["Post-punk", "Ska", "Grunge"],
    answer: "Post-punk"
  },
  {
    question: '¿De qué ciudad es originario Manolo Kabezabolo?',
    options: ["Barcelona", "Madrid", "Zaragoza"],
    answer: "Zaragoza"
  },
  {
    question: '¿Quién fue el principal compositor de la banda de punk The Dead Boys?',
    options: ["Cheetah Chrome", "Johnny Blitz", "Stiv Bators"],
    answer: "Cheetah Chrome"
  },
  {
    question: '¿Qué instrumento inusual para el punk destacaba en las canciones de X-Ray Spex?',
    options: ["Teclado", "Saxofón", "Violín"],
    answer: "Saxofón"
  },
  {
    question: '¿En qué año falleció Eduardo Benavente, vocalista de Parálisis Permanente?',
    options: ["1983", "1985", "1987"],
    answer: "1983"
  },
  {
    question: '¿Quién fue dueñ@ de la famosa tienda SEX en Londres, conocida por su influencia en la moda punk?',
    options: ["Vivienne Westwood", "Malcolm McLaren", "Johnny Rotten"],
    answer: "Malcolm McLaren"
  },
  {
    question: '¿Qué miembro de Blondie fue también fotógrafo y ha trabajado en muchas de las portadas de los álbumes de la banda?',
    options: ["Debbie Harry", "Clem Burke", "Chris Stein"],
    answer: "Chris Stein"
  },
  {
    question: '¿A qué sello discográfico estuvo vinculada Ana Curra durante su tiempo con Parálisis Permanente?',
    options: ["Discos Suicidas", "Oihuka", "Tres Cipreses"],
    answer: "Tres Cipreses"
  },
  {
    question: '¿Cuál es el nombre del primer sencillo de Siouxsie and the Banshees que alcanzó el top 10 en el Reino Unido?',
    options: ["Hong Kong Garden", "Spellbound", "Happy House"],
    answer: "Hong Kong Garden"
  },
  {
    question: '¿En qué año se lanzó el álbum "No Somos Nada" de La Polla Records?',
    options: ["1991", "1985", "1987"],
    answer: "1987"
  },
  {
    question: '¿En qué ciudad se formó la banda Bad Brains?',
    options: ["Los Ángeles", "Washington D.C.", "Nueva York"],
    answer: "Washington D.C."
  },
  {
    question: '¿Cómo se llamaba la cantante de Desechables?',
    options: ["Ana", "Keka ", "Tere"],
    answer: "Tere"
  },
  {
    question: '¿En qué año se formó la banda de punk española HHH?',
    options: ["1981", "1983", "1985"],
    answer: "1983"
  },
  {
    question: '¿En qué grupo se basa esta película, protagonizada por Kristen Stewart y Dakota Fanning?',
    options: ["The Punk Rock Girls", "Runaways: The Movie", "The Runaways"],
    answer: "The Runaways"
  },
  {
    question: '¿Qué álbum de Larsen fue lanzado en 1984, un año después de su formación?',
    options: ["El hombre dios", "Cucaracha", "Miedo"],
    answer: "Cucaracha"
  },
  {
    question: '¿De qué enfermedad falleció Grant Hart, batería de Hüsker Dü?',
    options: ["Cáncer de páncreas", "Cáncer de hígado", "Enfermedad cardíaca"],
    answer: "Cáncer de páncreas"
  },
]

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [time, setTime] = useState(15)
  const [showQuiz, setShowQuiz] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [animateTitle, setAnimateTitle] = useState(false)

  const handleStartQuiz = () => {
    setAnimateTitle(true)
    setTimeout(() => setShowQuiz(true), 1000)
  }

  const finishGame = () => {
    setIsFinished(true)
    setCurrentQuestionIndex(0)
    setAnswered(true)
    setCorrectAnswer(false)
    setTime(0)
  }

  const handleTimeUp = () => {
    setIsFinished(true)
  }

  return <div className='game-container'>
    <>
      {showQuiz ? (
        <div className='button-container'>
          {isFinished ? (
            <Result score={score} total={questions.length} />
          ) : (
            <>
              <Question
                question={questions[currentQuestionIndex]?.question}
                options={questions[currentQuestionIndex]?.options}
                answer={questions[currentQuestionIndex]?.answer}
                setScore={setScore}
                setAnswered={setAnswered}
                setCorrectAnswer={setCorrectAnswer}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                finishGame={finishGame}
                score={score}
                setTime={setTime}
                totalQuestions={questions.length}
                answered={answered}
                selectedOption={selectedOption}
              />
              {!isFinished && <Timer time={time} setTime={setTime} handleTimeUp={handleTimeUp} isFinished={isFinished} />}
            </>
          )}
        </div>
      ) : (
        <MainPage onStart={handleStartQuiz} animateTitle={animateTitle} />
      )}
    </>
  </div>
}

export default App