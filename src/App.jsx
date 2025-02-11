import { useState, useEffect } from 'react'
import Question from './components/Question'
import Result from './components/Result'
import MainPage from './components/MainPage'
// import './index.scss'

const questions = [
  {
    question: "¿En qué año se formó el punk en Reino Unido?",
    options: ["1976", "1980", "1970"],
    answer: "1976",
    explanation: "El punk surgió en Reino Unido en 1976 como una reacción a la música rock dominante de la época.",
    image: "./punk.jpg"
  },
  {
    question: "¿Quién es el líder de los Sex Pistols?",
    options: ["Sid Vicious", "Johnny Rotten", "Paul Cook"],
    answer: "Johnny Rotten",
    explanation: "Johnny Rotten, cuyo nombre real es John Lydon, es el vocalista principal de los Sex Pistols.",
    image: "./johnnyrotten.jpg"
  },
  {
    question: "¿Qué término describe el estilo de baile asociado al punk?",
    options: ["Mosh", "Skanking", "Pogo"],
    answer: "Pogo",
    explanation: "El pogo es un estilo de baile característico del punk que implica saltar y empujar a otros bailarines.",
    image: "./pogo.jpg"
  },
  {
    question: "¿Dónde se formó la banda de punk Cicatriz?",
    options: ["En la cárcel", "En un instituto de música", "En un barrio de Madrid"],
    answer: "En la cárcel",
    explanation: "Cicatriz se formó en la cárcel de Carabanchel, en Madrid, en 1983.",
    image: "./cicatriz.jpg"
  },
  {
    question: "¿En qué ciudad surgió la banda The Clash?",
    options: ["Nueva York", "Londres", "Los Ángeles"],
    answer: "Londres",
    explanation: "The Clash se formó en Londres en 1976 y fue una de las bandas más influyentes del punk británico.",
    image: "./theclash.jpg"
  },
  {
    question: "¿Qué banda fue una de las primeras en representar el punk en España?",
    options: ["Eskorbuto", "Siniestro Total", "Extremoduro"],
    answer: "Eskorbuto",
    explanation: "Eskorbuto fue una de las primeras bandas de punk en España y se formó en Santurce en 1980.",
    image: "./eskorbuto.jpg"
  },
  {
    question: "¿Qué miembro de Rancid fue también parte de la banda Operation Ivy?",
    options: ["Lars Frederiksen", "Tim Armstrong", "Matt Freeman"],
    answer: "Tim Armstrong",
    explanation: "Tim Armstrong fue miembro de Operation Ivy antes de formar Rancid con Matt Freeman.",
    image: "./timarmstrong.jpg"
  },
  {
    question: "¿Qué movimiento feminista fue impulsado por la banda Bikini Kill?",
    options: ["Punk Femme", "Girl Power", "Riot Grrrl"],
    answer: "Riot Grrrl",
    explanation: "Riot Grrrl es un movimiento feminista que surgió en los años 90, impulsado por bandas como Bikini Kill.",
    image: "./riotgrrrl.webp"
  },
  {
    question: '¿Qué álbum de The Ramones incluye la canción "Blitzkrieg Bop"?',
    options: ["Rocket to Russia", "Ramones", "End of the Century"],
    answer: "Ramones",
    explanation: "La canción 'Blitzkrieg Bop' aparece en el álbum debut homónimo de The Ramones, lanzado en 1976.",
    image: "./ramones.jpg"
  },
  {
    question: '¿Qué significa el término "DIY" en la cultura punk?',
    options: ["Do It Yesterday", "Do It Young", "Do It Yourself"],
    answer: "Do It Yourself",
    explanation: "DIY significa 'Do It Yourself' (Hazlo tú mismo) y es un principio fundamental en la cultura punk.",
    image: "./diy.jpeg"
  },
  {
    question: '¿Cómo se llama el álbum debut de Siniestro Total, lanzado en 1982?',
    options: ["Siniestro Total", "El Rey del Pollo Frito", "¿Cuándo se Come aquí?"],
    answer: "¿Cuándo se Come aquí?",
    explanation: "El álbum debut de Siniestro Total se llama '¿Cuándo se come aquí?' y fue lanzado en 1982.",
    image: "./siniestro.jpg"
  },
  {
    question: '¿Qué famoso logo de los Misfits, conocido como "The Crimson Ghost", fue creado por el artista Erich M. "Eerie" Von?',
    options: ["El logo de la calavera", "El esqueleto con gafas", "El fantasma rojo"],
    answer: "El logo de la calavera",
    explanation: "El logo de la calavera de los Misfits, conocido como 'The Crimson Ghost', fue creado por Eerie Von.",
    image: "./misfits.png"
  },
  {
    question: '¿A qué grupo versiona Las Vulpes con su canción Me Gusta Ser Una Zorra?',
    options: ["The Clash", "The Stooges", "Sex Pistols"],
    answer: "The Stooges",
    explanation: "Las Vulpes versionaron la canción 'I Wanna Be Your Dog' de The Stooges.",
    image: "./stooges.jpg"
  },
  {
    question: '¿Qué significan las siglas "CBGB" en el nombre del famoso club de Nueva York?',
    options: ["Country, Blue Grass, and Blues", "Classic Beats and Great Bands", "Contemporary Bands Going Beyond"],
    answer: "Country, Blue Grass, and Blues",
    explanation: "CBGB significa 'Country, Blue Grass, and Blues', los géneros musicales originales del club,  aunque el club se hizo famoso por el punk.",
    image: "./cbgb.webp"
  },
  {
    question: '¿De dónde era la banda RIP, considerada una de las más influyentes del punk en España?',
    options: ["Madrid", "Mondragón", "Barakaldo"],
    answer: "Mondragón",
    explanation: "RIP, eran una banda de punk originaria de Mondragón y se formaron en 1982.",
    image: "./rip.jpg"
  },
  {
    question: '¿Qué miembro de The Stooges fue conocido por su estilo de guitarra agresivo y su influencia en el sonido de la banda?',
    options: ["Ron Asheton", "James Williamson", "Steve Mackay"],
    answer: "Ron Asheton",
    explanation: "Ron Asheton fue el guitarrista original de The Stooges y es conocido por su estilo agresivo y su influencia en el sonido de la banda.",
    image: "./ronasheton.jpg"
  },
  {
    question: '¿En qué ciudad se formó la banda punk española Último Resorte?',
    options: ["Madrid", "Barcelona", "Valencia"],
    answer: "Barcelona",
    explanation: " Último Resorte se formó en Barcelona en 1979 y es considerada una de las primeras bandas de punk en España.",
    image: "./ultimoresorte.webp"
  },
  {
    question: '¿Cómo se llama la banda que hace versiones en estilo ranchero de las canciones de NOFX?',
    options: ["Los Rancheros del Punk", "Sin Efectos", "Punk Ranchero"],
    answer: "Sin Efectos",
    explanation: "Sin Efectos es una banda que hace versiones en estilo ranchero de las canciones de NOFX.",
    image: "./sinefectos.jpg"
  },
  {
    question: '¿Qué miembro de Kaka de Luxe se destacó por ser uno de los primeros en formar parte de la banda Alaska y los Pegamoides?',
    options: ["Carlos Berlanga", "Nacho Canut", "Eduardo Benavente"],
    answer: "Carlos Berlanga",
    explanation: "Carlos Berlanga fue uno de los miembros de Kaka de Luxe y más tarde formó parte de Alaska y los Pegamoides.",
    image: "./carlosberlanga.jpg"
  },
  {
    question: '¿En qué ciudad se formó la banda The Cramps?',
    options: ["Nueva York", "San Diego", "Sacramento"],
    answer: "Sacramento",
    explanation: "The Cramps se formó en Sacramento, California, en 1976 y fue una banda influyente en la escena punk y rockabilly.",
    image: "./cramps.webp"
  },
  {
    question: '¿Quién es el vocalista principal de la banda Dead Kennedys?',
    options: ["Jello Biafra", "Joe Strummer", "Johnny Rotten"],
    answer: "Jello Biafra",
    explanation: "Jello Biafra es el vocalista principal de Dead Kennedys, una banda de punk originaria de San Francisco.",
    image: "./jellobiafra.jpeg"
  },
  {
    question: '¿Qué ocurrió con Kortatu en 1988, poco después de lanzar "Kolpez Kolpe"?',
    options: ["La banda se trasladó a Londres para grabar", "Se separaron debido a diferencias internas", "Empezaron a tocar en Estados Unidos"],
    answer: "Se separaron debido a diferencias internas",
    explanation: "Kortatu se separó en 1988 debido a diferencias internas poco después de lanzar 'Kolpez Kolpe'.",
    image: "./kortatu.jpg"
  },
  {
    question: '¿Qué álbum de Green Day marcó su transición al punk más comercial en los años 90?',
    options: ["Insomniac", "American Idiot", "Dookie"],
    answer: "Dookie",
    explanation: "'Dookie' es el tercer álbum de Green Day que marcó su transición al punk más comercial.",
    image: "./dookie.jpg"
  },
  {
    question: '¿Cuál fue el primer álbum de Commando 9mm?',
    options: ["Amor Frenopático", "Contra el Sistema", "La Sombra del Futuro"],
    answer: "Amor Frenopático",
    explanation: "'Amor Frenopático' fue el primer álbum de Commando 9mm, lanzado en 1986.",
    image: "./amor.jpg"
  },
  {
    question: '¿Qué significa "MC5", el nombre de la banda pionera del punk y del rock psicodélico?',
    options: ["Motor City 5", "Michigan City 5", "Midnight City 5"],
    answer: "Motor City 5",
    explanation: "MC5 significa 'Motor City 5' y es una referencia a Detroit, la ciudad de origen de la banda.",
    image: "./mc5.jpeg"
  },
  {
    question: '¿Qué álbum de Agnostic Front es considerado uno de los pilares del hardcore punk en los años 80?',
    options: ["Cause for Alarm", "Victim in Pain", "One Voice"],
    answer: "Victim in Pain",
    explanation: "'Victim in Pain' es el álbum debut de Agnostic Front y es considerado uno de los pilares del hardcore punk.",
    image: "./agnosticfront.jpeg"
  },
  {
    question: '¿Qué álbum de Cocadictos incluye la famosa canción "Fieles siempre al vicio"?',
    options: ["Cocadictos", "Nadie Nos Parará", "Solo Para Locos"],
    answer: "Cocadictos",
    explanation: "'Cocadictos' es el álbum de la banda que incluye la canción 'Fieles siempre al vicio'.",
    image: "./cocadictos.jpg"
  },
  {
    question: '¿Quién fue el vocalista original de Black Flag, conocido por su estilo agresivo y su influencia en el hardcore punk?',
    options: ["Henry Rollins", "Keith Morris", "Greg Ginn"],
    answer: "Keith Morris",
    explanation: "Keith Morris fue el vocalista original de Black Flag.",
    image: "./keithmorris.jpg"
  },
  {
    question: '¿En qué año se separó la banda de punk Sin Dios?',
    options: ["1994", "1998", "1996"],
    answer: "1996",
    explanation: "Sin Dios se separó en 1996 después de lanzar varios álbumes y EPs.",
    image: "./sindios.jpg"
  },
  {
    question: '¿Qué género musical se asocia principalmente con The Slits?',
    options: ["Post-punk", "Ska", "Grunge"],
    answer: "Post-punk",
    explanation: "The Slits es una banda de post-punk formada en 1976 y es conocida por su estilo post-punk.",
    image: "./slits.jpg"
  },
  {
    question: '¿De qué ciudad es originario Manolo Kabezabolo?',
    options: ["Barcelona", "Madrid", "Zaragoza"],
    answer: "Zaragoza",
    explanation: "Manolo Kabezabolo es un músico punk originario de Zaragoza, España.",
    image: "./kabezabolo.png"
  },
  {
    question: '¿Quién fue el principal compositor de la banda de punk The Dead Boys?',
    options: ["Cheetah Chrome", "Johnny Blitz", "Stiv Bators"],
    answer: "Cheetah Chrome",
    explanation: "Cheetah Chrome fue el principal compositor principal y guitarrista de The Dead Boys.",
    image: "./cheetah.jpg"
  },
  {
    question: '¿Qué instrumento inusual para el punk destacaba en las canciones de X-Ray Spex?',
    options: ["Teclado", "Saxofón", "Violín"],
    answer: "Saxofón",
    explanation: "X-Ray Spex era conocido por su uso del saxofón en sus canciones, un instrumento inusual en el punk.",
    image: "./xray.jpg"
  },
  {
    question: '¿En qué año falleció Eduardo Benavente, vocalista de Parálisis Permanente?',
    options: ["1983", "1985", "1987"],
    answer: "1983",
    explanation: "Eduardo Benavente falleció trágicamente en un accidente de tráfico en 1983.",
    image: "./eduardobenavente.jpg"
  },
  {
    question: '¿Quién fue dueñ@ de la famosa tienda SEX en Londres, conocida por su influencia en la moda punk?',
    options: ["Vivienne Westwood", "Malcolm McLaren", "Johnny Rotten"],
    answer: "Malcolm McLaren",
    explanation: "Malcolm McLaren fue dueño de la tienda SEX en Londres.",
    image: "./mclaren.png"
  },
  {
    question: '¿Qué miembro de Blondie fue también fotógrafo y ha trabajado en muchas de las portadas de los álbumes de la banda?',
    options: ["Debbie Harry", "Clem Burke", "Chris Stein"],
    answer: "Chris Stein",
    explanation: "Chris Stein, guitarrista de Blondie, también es fotógrafo y ha trabajado en muchas de las portadas de los álbumes de la banda.",
    image: "./chrisstein.jpeg"
  },
  {
    question: '¿En qué año lanzó Ana Curra su álbum en solitario "El Acto"?',
    options: ["1982", "2014", "2000"],
    answer: "2014",
    explanation: "Ana Curra lanzó su álbum en solitario titulado 'El Acto' en 2014.",
    image: "./anacurra.webp"
  },
  {
    question: '¿Cuál es el nombre del primer sencillo de Siouxsie and the Banshees que alcanzó el top 10 en el Reino Unido?',
    options: ["Hong Kong Garden", "Spellbound", "Happy House"],
    answer: "Hong Kong Garden",
    explanation: "'Hong Kong Garden' fue el primer sencillo de Siouxsie and the Banshees que alcanzó el top 10 en el Reino Unido.",
    image: "./siouxsie.png"
  },
  {
    question: '¿En qué año se lanzó el álbum "No Somos Nada" de La Polla Records?',
    options: ["1991", "1985", "1987"],
    answer: "1987",
    explanation: "'No Somos Nada' es el tercer álbum de La Polla Records y fue lanzado en 1987.",
    image: "./pollarecords.jpg"
  },
  {
    question: '¿En qué ciudad se formó la banda Bad Brains?',
    options: ["Los Ángeles", "Washington D.C.", "Nueva York"],
    answer: "Washington D.C.",
    explanation: "Bad Brains se formó en Washington D.C. en 1977 y es conocida por su fusión de punk y reggae.",
    image: "./badbrains.jpeg"
  },
  {
    question: '¿Cómo se llamaba la cantante de Desechables?',
    options: ["Ana", "Keka ", "Tere"],
    answer: "Tere",
    explanation: "Tere fue la cantante de Desechables, banda de punk de Barcelona.",
    image: "./desechables.jpg"
  },
  {
    question: '¿En qué año se formó la banda de punk española HHH?',
    options: ["1981", "1983", "1985"],
    answer: "1983",
    explanation: "HHH (Harina de Huesos Humanos) se formó en 1983 en Barcelona.",
    image: "./hhh.webp"
  },
  {
    question: '¿En qué grupo se basa esta película, protagonizada por Kristen Stewart y Dakota Fanning?',
    options: ["The Punk Rock Girls", "Runaways: The Movie", "The Runaways"],
    answer: "The Runaways",
    explanation: "La película 'The Runaways' está basada en la historia real de la banda de rock The Runaways.",
    image: "./runaways.jpg"
  },
  {
    question: '¿Qué álbum de Larsen fue lanzado en 1984, un año después de su formación?',
    options: ["El hombre dios", "Cucaracha", "Miedo"],
    answer: "Cucaracha",
    explanation: "'Cucaracha' es el primer álbum de Larsen y fue lanzado en 1984.",
    image: "./larsen.jpeg"
  },
  {
    question: '¿De qué enfermedad falleció Grant Hart, batería de Hüsker Dü?',
    options: ["Cáncer de páncreas", "Cáncer de hígado", "Enfermedad cardíaca"],
    answer: "Cáncer de páncreas",
    explanation: "Grant Hart falleció de cáncer de páncreas en 2017.",
    image: "./granthart.jpg"
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

  const handleTimeUp = () => setIsFinished(true)

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setAnswered(false)
    setCorrectAnswer(null)
    setTime(15)
    setIsFinished(false)
    setSelectedOption(null)
  }

  return <>
    {showQuiz ? (
      <div>
        {isFinished ? (
          <Result
            score={score}
            total={questions.length}
            onRestart={handleRestart} />
        ) : (
          <>
            <Question
              question={questions[currentQuestionIndex]?.question}
              options={questions[currentQuestionIndex]?.options}
              answer={questions[currentQuestionIndex]?.answer}
              image={questions[currentQuestionIndex]?.image}
              explanation={questions[currentQuestionIndex]?.explanation}
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
              time={time}
              handleTimeUp={handleTimeUp}
              isFinished={isFinished}
            />
          </>
        )}
      </div >
    ) : (
      <MainPage
        onStart={handleStartQuiz}
        animateTitle={animateTitle} />
    )}
  </>
}

export default App