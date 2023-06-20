import { Bot, Sparkles, UserCircle } from "lucide-react";
import { Input } from "./ui/input";

export const Chat = () => {
  return (
    <div className="flex w-64 flex-col border-l border-[#1e1e1e]/5 dark:border-neutral-100/5">
      <div className="grow overflow-scroll">
      <div className="p-1 px-4 text-sm border-b">
          <div className="flex items-center gap-2">
            <UserCircle size={16} strokeWidth={1} />{" "}
            <div className="font-medium">Nils Reich</div>
          </div>
          <div className="pt-2">
            beschreibe kurz wie eine unterrichtsstunde zur berechnung von
            Schnittpunkten aussehen kann
          </div>
        </div>
        <div className="p-1 px-4 text-sm border-b">
          <div className="flex items-center gap-2">
            <Bot size={16} strokeWidth={1} />{" "}
            <div className="font-medium">AI</div>
          </div>
          <div className="pt-2 leading-6">
            <h1>Unterrichtsstunde: Berechnung von Schnittpunkten</h1>

            <h2 className=" font-semibold mt-4">1. Einführung</h2>
            <p>
              Der Lehrer erklärt den Schülern, was Schnittpunkte sind und warum
              sie in der Mathematik wichtig sind. Dabei werden Beispiele
              gezeigt, wie beispielsweise zwei Graphen von Funktionen, die sich
              schneiden.
            </p>

            <h2 className=" font-semibold mt-4">2. Grundlagenwiederholung</h2>
            <p>
              Der Lehrer stellt sicher, dass die Schüler die Grundlagen der
              linearen Funktionen und Gleichungen kennen. Dies umfasst das
              Verständnis von Steigung, y-Achsenabschnitt und der allgemeinen
              Form einer linearen Gleichung (y = mx + b).
            </p>

            <h2 className=" font-semibold mt-4">
              3. Berechnung von Schnittpunkten von zwei linearen Funktionen
            </h2>
            <p>
              Der Lehrer zeigt den Schülern, wie man die Schnittpunkte zweier
              linearer Funktionen berechnet. Dazu werden die Gleichungen der
              Funktionen gleichgesetzt und nach den Variablen aufgelöst. Die
              Schüler lernen, wie man Gleichungssysteme löst und die Lösungen
              interpretiert.
            </p>

            <h2 className=" font-semibold mt-4">4. Anwendung auf reale Probleme</h2>
            <p>
              Der Lehrer präsentiert den Schülern reale Anwendungsbeispiele, bei
              denen Schnittpunkte berechnet werden müssen. Dies können
              beispielsweise Probleme aus der Physik sein, bei denen zwei sich
              bewegende Objekte sich treffen oder sich schneidende Geraden in
              geometrischen Figuren.
            </p>

            <h2 className=" font-semibold mt-4">5. Übungsaufgaben</h2>
            <p>
              Die Schüler erhalten Übungsaufgaben, um das Gelernte anzuwenden
              und ihre Fähigkeiten zur Berechnung von Schnittpunkten zu
              festigen. Dabei sollten verschiedene Schwierigkeitsstufen
              berücksichtigt werden, um den unterschiedlichen Lernbedürfnissen
              gerecht zu werden.
            </p>

            <h2 className=" font-semibold mt-4">6. Zusammenfassung und Diskussion</h2>
            <p>
              Am Ende der Stunde fasst der Lehrer die wichtigsten Punkte noch
              einmal zusammen und beantwortet offene Fragen der Schüler. Es wird
              eine kurze Diskussion darüber geführt, wie die Kenntnis der
              Schnittpunktberechnung in anderen mathematischen Themen oder im
              realen Leben nützlich sein kann.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t p-2 border-[#1e1e1e]/5 dark:border-neutral-100/5">
        <div className="font-medium p-1 text-sm mb-2">
        <Sparkles size={16} strokeWidth={1} className="inline-block mr-2"/> 
        <span>Erstelle eine Zusammenfassung der letzten Stunde</span>
        </div>
        <Input
          type="text"
          placeholder="Stelle Sasu eine Frage"
          className="bg-[#1e1e1e]/5 text-sm px-2 py-1 rounded h-min placeholder:text-xs border-[#1e1e1e]/5 dark:border-neutral-100/5"
        />
      </div>
    </div>
  );
};
