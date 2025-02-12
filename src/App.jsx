import { useState } from 'react'
import Question from './components/Question'
import Result from './components/Result'
import MainPage from './components/MainPage'

const questions = [
  {
    question: "¿En qué año se populariza el punk en Reino Unido?",
    options: ["1977", "1980", "1970"],
    answer: "1977",
    explanation: "El punk se populariza en Reino Unido en 1977, gracias a bandas como Sex Pistols, The Clash y The Damned, que fueron adquiriendo notoriedad por aquella época.",
    image: "./punk.jpg"
  },
  {
    question: "¿Quién es el cantante original de los Sex Pistols?",
    options: ["Sid Vicious", "Johnny Rotten", "Paul Cook"],
    answer: "Johnny Rotten",
    explanation: "Johnny Rotten, cuyo nombre real es John Lydon, nacido en Londres en 1956, fue el cantante principal de la banda.",
    image: "./johnnyrotten.jpg"
  },
  {
    question: "¿Cómo se llama el estilo de baile asociado al punk?",
    options: ["Mosh", "Skanking", "Pogo"],
    answer: "Pogo",
    explanation: "El pogo es un estilo de baile característico del punk que implica bailar saltando y dando empujones.",
    image: "./pogo.jpg"
  },
  {
    question: "¿Dónde se formó la banda de punk Cicatriz?",
    options: ["En un centro de desintoxicación", "En un instituto de música", "En un barrio de Madrid"],
    answer: "En un centro de desintoxicación",
    explanation: "Cicatriz se formó en un centro de desintoxicación, en Vitoria, en 1983.",
    image: "./cicatriz.jpg"
  },
  {
    question: "¿En qué ciudad surge la banda The Clash?",
    options: ["Nueva York", "Londres", "Los Ángeles"],
    answer: "Londres",
    explanation: "The Clash se forma en Londres en 1976 y es considerada una de las bandas más influyentes del punk británico.",
    image: "./theclash.jpg"
  },
  {
    question: "¿Cuál de estas bandas, pioneras del punk en el estado Español, se forma primero?",
    options: ["Eskorbuto", "Siniestro Total", "Parálisis Permanente"],
    answer: "Eskorbuto",
    explanation: "Eskorbuto fue una de las primeras bandas de punk en España y se formó en Santurce en 1980.",
    image: "./eskorbuto.jpg"
  },
  {
    question: "¿Cuál de estos miembros de Rancid fue también parte de la banda Operation Ivy?",
    options: ["Lars Frederiksen", "Tim Armstrong", "Brett Reed"],
    answer: "Tim Armstrong",
    explanation: "Tim Armstrong fue miembro de Operation Ivy antes de formar Rancid junto con Matt Freeman y Lars Frederiksen.",
    image: "./timarmstrong.jpg"
  },
  {
    question: "¿Qué nombre se le puso al movimiento feminista impulsado por la banda Bikini Kill?",
    options: ["Punk Femme", "Girl Power", "Riot Grrrl"],
    answer: "Riot Grrrl",
    explanation: "Riot Grrrl fue el término acuñado para este movimiento surgido en la década de los 90.",
    image: "./riotgrrrl.webp"
  },
  {
    question: "¿Qué álbum de The Ramones incluye la canción 'Blitzkrieg Bop'?",
    options: ["Rocket to Russia", "Ramones", "End of the Century"],
    answer: "Ramones",
    explanation: "La canción 'Blitzkrieg Bop' aparece en el álbum debut homónimo de la banda, lanzado en abril de 1976.",
    image: "./ramones.jpg"
  },
  {
    question: '¿Qué significa el término "DIY"?',
    options: ["Do It Yesterday", "Do It Young", "Do It Yourself"],
    answer: "Do It Yourself",
    explanation: "DIY significa 'Do It Yourself' (Hazlo tú mismo) y es uno de los principios básicos del movimiento punk.",
    image: "./diy.jpeg"
  },
  {
    question: '¿Cómo se llama el álbum debut de Siniestro Total, lanzado en 1982?',
    options: ["Siniestro Total", "El Rey del Pollo Frito", "¿Cuándo se Come aquí?"],
    answer: "¿Cuándo se Come aquí?",
    explanation: "Con su característica referencia a los hermanos Dalton en la portada, el primer álbum que publicó Siniestro Total fue '¿Cuándo se come aquí?'.",
    image: "./siniestro.jpg"
  },
  {
    question: 'El famoso logo de los Misfits, se inspira en la película "The Crimson Ghost". ¿De qué año es esta película?',
    options: ["1946", "1964", "1970"],
    answer: "1946",
    explanation: "El logo de la calavera de los Misfits, conocido como 'The Crimson Ghost', fue inspirado en la cinta de terror con el mismo nombre, estrenada en 1946.",
    image: "./misfits.png"
  },
  {
    question: '¿A qué grupo versionan Las Vulpes con su canción "Me Gusta Ser Una Zorra?"',
    options: ["The Clash", "The Stooges", "Sex Pistols"],
    answer: "The Stooges",
    explanation: "En 1983, Las Vulpes hicieron su propia versión de la canción 'I Wanna Be Your Dog' de The Stooges.",
    image: "./stooges.jpg"
  },
  {
    question: '¿Qué significan las siglas "CBGB", nombre del famoso club de Nueva York?',
    options: ["Country, Blue Grass, and Blues", "Classic Beats and Great Bands", "Contemporary Bands Going Beyond"],
    answer: "Country, Blue Grass, and Blues",
    explanation: "CBGB significa 'Country, Blue Grass, and Blues', haciendo referencia a los géneros musicales a los que pretendía dar cabida el club, aunque finalmente se convirtió en el local de referencia para los punks de NY.",
    image: "./cbgb.webp"
  },
  {
    question: '¿De dónde era la banda RIP, considerada una de las más influyentes del punk en España?',
    options: ["Madrid", "Mondragón", "Barakaldo"],
    answer: "Mondragón",
    explanation: "RIP, era una banda de punk originaria de Mondragón y se formó en 1982.",
    image: "./rip.jpg"
  },
  {
    question: '¿Qué miembro de The Stooges fue conocido por su estilo de guitarra agresivo y su influencia en el sonido de la banda?',
    options: ["Ron Asheton", "Scott Asheton", "Steve Asheton"],
    answer: "Ron Asheton",
    explanation: "Ron Asheton, guitarrista, bajista y compositor, originario de Washington D.C., fue uno de los fundadores de The Stooges, junto con su hermano Scott Asheton a la batería.",
    image: "./ronasheton.jpg"
  },
  {
    question: '¿En qué ciudad se formó la banda punk española Último Resorte?',
    options: ["Madrid", "Barcelona", "Valencia"],
    answer: "Barcelona",
    explanation: "Último Resorte surgió en Barcelona en 1979.",
    image: "./ultimoresorte.webp"
  },
  {
    question: '¿Cómo se llama la banda que hace versiones en estilo mariachi de las canciones de NOFX?',
    options: ["Los Mariachis del Punk", "Sin Efectos", "Mariachi Guerrilla"],
    answer: "Sin Efectos",
    explanation: "Sin Efectos es una banda que existe, de verdad, si no lo conoces, búscalo.",
    image: "./sinefectos.jpg"
  },
  {
    question: '¿Qué miembro de Kaka de Luxe es conocido por formar parte de la banda Alaska y los Pegamoides?',
    options: ["Carlos Berlanga", "Magüu Pilarte", "Eduardo Benavente"],
    answer: "Carlos Berlanga",
    explanation: "Carlos Berlanga fue uno de los miembros de Kaka de Luxe y más tarde formó parte de Alaska y los Pegamoides.",
    image: "./carlosberlanga.jpg"
  },
  {
    question: '¿En qué ciudad se formó la banda The Cramps?',
    options: ["Nueva York", "San Diego", "Sacramento"],
    answer: "Sacramento",
    explanation: "The Cramps se formó en Sacramento, California, en 1976 combinando en su estilo el primitivo rockabilly y el garage rock de los años 60 con punk rock.",
    image: "./cramps.webp"
  },
  {
    question: '¿Quién es el cantante principal de la banda Dead Kennedys?',
    options: ["Jello Biafra", "Joe Strummer", "Henry Rollins"],
    answer: "Jello Biafra",
    explanation: "Jello Biafra es el cantante principal de Dead Kennedys, originarios de San Francisco.",
    image: "./jellobiafra.jpeg"
  },
  {
    question: '¿Qué ocurrió con Kortatu en 1988, poco después de lanzar "Kolpez Kolpe"?',
    options: ["La banda se trasladó a Londres para grabar", "Se separaron", "Empezaron a tocar en Estados Unidos"],
    answer: "Se separaron",
    explanation: "Kortatu se separó en 1988 debido a diferencias internas, no sin antes editar el álbum en directo 'Azken Guda Dantza'.",
    image: "./kortatu.jpg"
  },
  {
    question: '¿Qué álbum de Green Day marcó su transición al punk más comercial en los años 90?',
    options: ["Insomniac", "American Idiot", "Dookie"],
    answer: "Dookie",
    explanation: "'Dookie' es el tercer álbum de Green Day. Supuso su salto al mainstream y es su disco más exitoso hasta la fecha, con más de 20 millones de copias vendidas.",
    image: "./dookie.jpg"
  },
  {
    question: '¿Cuál fue el primer álbum de Commando 9mm?',
    options: ["Amor Frenopático", "Únete al Commando", "Camino hacia la ruina"],
    answer: "Amor Frenopático",
    explanation: "'Amor Frenopático' fue el álbum debut de Commando 9mm, lanzado en 1986 por Fonomusic.",
    image: "./amor.jpg"
  },
  {
    question: '¿Qué significa el nombre de la banda "MC5"?',
    options: ["Motor City 5", "Michigan City 5", "Midnight City 5"],
    answer: "Motor City 5",
    explanation: "MC5 significa 'Motor City 5' y es una referencia a Detroit, la ciudad de origen de la banda.",
    image: "./mc5.jpeg"
  },
  {
    question: '¿Cuál de estos álbumes de Agnostic Front fue editado antes?',
    options: ["Cause for Alarm", "Victim in Pain", "One Voice"],
    answer: "Victim in Pain",
    explanation: "'Victim in Pain' es el álbum debut de Agnostic Front. Fue editado en 1984 y es considerado uno de los pilares del hardcore punk.",
    image: "./agnosticfront.jpeg"
  },
  {
    question: '¿Qué grupo de Zaragoza compuso el tema "Fieles siempre al vicio"?',
    options: ["Cocadictos", "IV Reich", "Liposo+ Pa Tu Jeto"],
    answer: "Cocadictos",
    explanation: "Cocadictos surge en Zaragoza en el año 1983 de las cenizas de Cadáveres Aterciopelados, siendo considerada una de las primeras formaciones punk de la ciudad.",
    image: "./cocadictos.jpg"
  },
  {
    question: '¿Quién fue el primer cantante de Black Flag?',
    options: ["Henry Rollins", "Keith Morris", "Greg Ginn"],
    answer: "Keith Morris",
    explanation: "Keith Morris fue el cantante original de la banda entre 1976 y 1979.",
    image: "./keithmorris.jpg"
  },
  {
    question: '¿En qué año se separó la banda de punk Sin Dios?',
    options: ["1994", "1998", "2006"],
    answer: "2006",
    explanation: "Tras estar activos desde el año 1988, Sin Dios se separó en 2006 después de lanzar álbumes como 'Alerta Antifascista', 'Ingobernables' o 'Guerra a la Guerra'.",
    image: "./sindios.jpg"
  },
  {
    question: '¿Cuál de estos géneros musicales define mejor el sonido de The Slits?',
    options: ["Post-punk", "Ska", "Grunge"],
    answer: "Post-punk",
    explanation: "The Slits es una banda británica formada en 1976, cuyo sonido fue evolucionando a lo largo de los discos, pero que a grandes rasgos podemos encajar dentro del post-punk.",
    image: "./slits.jpg"
  },
  {
    question: '¿De qué ciudad es originario Manolo Kabezabolo?',
    options: ["Barcelona", "Madrid", "Zaragoza"],
    answer: "Zaragoza",
    explanation: "Manolo Kabezabolo es un músico punk originario de Zaragoza.",
    image: "./kabezabolo.png"
  },
  {
    question: '¿Quién fue el principal compositor de la banda de punk Dead Boys?',
    options: ["Cheetah Chrome", "Johnny Blitz", "Stiv Bators"],
    answer: "Cheetah Chrome",
    explanation: "Cheetah Chrome fue el guitarrista y compositor principal de Dead Boys.",
    image: "./cheetah.jpg"
  },
  {
    question: '¿Qué instrumento inusual destacaba en las canciones de X-Ray Spex?',
    options: ["Teclado", "Saxofón", "Violín"],
    answer: "Saxofón",
    explanation: "X-Ray Spex eran conocidos por introducir el saxofón en sus canciones, algo poco corriente en las bandas de punk de aquella época.",
    image: "./xray.jpg"
  },
  {
    question: '¿En qué año falleció Eduardo Benavente, cantante de Parálisis Permanente?',
    options: ["1983", "1985", "1987"],
    answer: "1983",
    explanation: "Eduardo Benavente falleció en un accidente de tráfico el 14 de Mayo de 1983.",
    image: "./eduardobenavente.jpg"
  },
  {
    question: '¿Quién fue dueñ@ de la famosa tienda SEX en Londres, conocida por su influencia en la moda punk?',
    options: ["Jordan Mooney", "Malcolm McLaren", "Johnny Rotten"],
    answer: "Malcolm McLaren",
    explanation: "Malcolm McLaren fue dueño de la tienda SEX, que regentaba junto a la que fue su mujer, la diseñadora de moda Vivienne Westwood.",
    image: "./mclaren.png"
  },
  {
    question: '¿Qué miembro de Blondie fue también fotógrafo y ha trabajado en muchas de las portadas de los álbumes de la banda?',
    options: ["Debbie Harry", "Clem Burke", "Chris Stein"],
    answer: "Chris Stein",
    explanation: "Chris Stein, guitarrista de Blondie, ha trabajado también como compositor y productor cinematográfico.",
    image: "./chrisstein.jpeg"
  },
  {
    question: '¿En qué año lanzó Ana Curra su propia versión de "El Acto", regrabando algunos de los temas del clásico disco de Parálisis Permanente?',
    options: ["1982", "2012", "2000"],
    answer: "2012",
    explanation: "En 2012 Ana Curra regraba cuatro temas de Parálisis Permanente, entre los que se encuentran 'Adictos A La Lujuria' y 'Tengo Un Pasajero'.",
    image: "./anacurra.webp"
  },
  {
    question: '¿Cuál es el nombre del primer sencillo de Siouxsie and the Banshees que alcanzó el top 10 en el Reino Unido?',
    options: ["Hong Kong Garden", "Spellbound", "Happy House"],
    answer: "Hong Kong Garden",
    explanation: "'Hong Kong Garden' fue lanzado el 18 de Agosto de 1978 y alcanzó el número 7 en las listas de Reino Unido.",
    image: "./siouxsie.png"
  },
  {
    question: '¿En qué año se lanzó el álbum "No Somos Nada" de La Polla Records?',
    options: ["1991", "1985", "1987"],
    answer: "1987",
    explanation: "'No Somos Nada' es el tercer álbum de la banda y fue lanzado en 1987 por su propio sello discográfico, llamado Txata Records.",
    image: "./pollarecords.jpg"
  },
  {
    question: '¿En qué ciudad se formó la banda Bad Brains?',
    options: ["Los Ángeles", "Washington D.C.", "Nueva York"],
    answer: "Washington D.C.",
    explanation: "Bad Brains se formó en Washington D.C. en 1977 y es conocida por su fusión de hardcore punk y reggae.",
    image: "./badbrains.jpeg"
  },
  {
    question: '¿Cómo se llamaba la cantante de Desechables, banda de punk de Barcelona?',
    options: ["Ana", "Keka ", "Tere"],
    answer: "Tere",
    explanation: "Al comienzo, Siscu, Jaime y Tere se encargaban de poner voz a la banda, pero en seguida y a sus 14 años, Tere se erigió como única cantante del grupo.",
    image: "./desechables.jpg"
  },
  {
    question: '¿En qué año se formó la banda HHH?',
    options: ["1981", "1983", "1985"],
    answer: "1985",
    explanation: "HHH (Harina de Huesos Humanos), banda con influencias del D-beat escandinavo en sus inicios, pero después cada vez más tendente al thrash y thrashcore se formó en 1985 en Barcelona.",
    image: "./hhh.webp"
  },
  {
    question: '¿En la vida de qué grupo se basa la película que protagonizan por Kristen Stewart y Dakota Fanning?',
    options: ["Plasmatics", "L7", "The Runaways"],
    answer: "The Runaways",
    explanation: "La película 'The Runaways' está basada en la historia real de la banda de punk con el mismo nombre.",
    image: "./runaways.jpg"
  },
  {
    question: '¿Qué EP de Larsen fue lanzado en 1983?',
    options: ["Vomitas Sangre", "¡No!", "Requiem"],
    answer: "¡No!",
    explanation: "'¡No!' es el primer EP de Larsen y fue lanzado en 1983.",
    image: "./larsen.jpeg"
  },
  {
    question: '¿De qué enfermedad falleció Grant Hart, batería de Hüsker Dü?',
    options: ["Cáncer de pulmón", "Cáncer de hígado", "Enfermedad cardíaca"],
    answer: "Cáncer de hígado",
    explanation: "Grant Hart falleció de cáncer de hígado en 2017.",
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