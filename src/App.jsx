import './App.css'
const Card = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>

    )
}
const App = () => {
          return (
              <div className="card-container">
                  <Card title="Star wars" />
                  <Card title="Avatars" />
                  <Card title="The Lion Kings"/>
              </div>
          )
}
export default App
