import './App.css'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercise1} />
      <Part part={props.part2} exercises={props.exercise2} />
      <Part part={props.part3} exercises={props.exercise3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
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
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of component'
  const exercise3 = 14

  const name = 'Bianca Beatriz A. ferenal'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercise1={exercise1}
        part2={part2}
        exercise2={exercise2}
        part3={part3}
        exercise3={exercise3}
      />
      <Total
        exercise1={exercise1}
        exercise2={exercise2}
        exercise3={exercise3}
      />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App