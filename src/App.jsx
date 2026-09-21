import './App.css'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <h1>
        {props.name} - {props.courseCode} - {props.section}
      </h1>
    </footer>
  )
}

const App = () => {
  const course = 'CIT-U Bachelor of Science in Information Technology: Industry Elective'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of component',
    exercises: 14
  }

  const name = 'Bianca Beatriz A. ferenal'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App