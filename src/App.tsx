import { Route, Switch } from "wouter"
import Home from "@/pages/home"
import Projects from "@/pages/projects"
import PineApple from "@/pages/pineapple"
import Notes from "@/pages/notes"
import NoteDetail from "@/pages/note-detail"
import Devlog from "@/pages/devlog"
import Contact from "@/pages/contact"
import Privacy from "@/pages/privacy"
import Terms from "@/pages/terms"
import NotFound from "@/pages/not-found"

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/pineapple" component={PineApple} />
      <Route path="/notes" component={Notes} />
      <Route path="/notes/:slug" component={NoteDetail} />
      <Route path="/devlog" component={Devlog} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
