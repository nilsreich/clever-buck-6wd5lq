import { Toolbar } from "./Toolbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Editor = () => {
  return (
    <ScrollArea className="grow">
      <div className="grow">
        <div className="border-b border-[#1e1e1e]/5 px-6 py-3 text-sm dark:border-neutral-100/5">
          Sessions / BGY22a / Extremwertaufgaben
        </div>
        <Toolbar />
        <div className="mx-auto max-w-[900px] grow p-12 ">
          <div className="text-3xl">
            Extremwertaufgaben: Die Suche nach dem Optimum
          </div>
          <div className="mb-6 mt-20 text-xl">Einleitung</div>
          <div className="text-lg">
            In der Mathematik begegnen uns verschiedene Anwendungen, die auf die
            Suche nach dem Maximum oder Minimum eines bestimmten Problems
            abzielen. Solche Probleme werden als Extremwertaufgaben bezeichnet
            und finden in vielen Bereichen Anwendung, von der Physik und
            Wirtschaft bis hin zur Ingenieurwissenschaft und sogar in der
            Alltagsplanung. Dieser Artikel wird sich mit Extremwertaufgaben
            befassen und die grundlegenden Konzepte sowie Lösungsansätze
            erläutern.
          </div>
          <div className="mb-6 mt-12 text-xl">Was sind Extremwertaufgaben?</div>
          <div className="text-lg">
            Extremwertaufgaben beschäftigen sich mit der Suche nach den größten
            (Maximum) oder kleinsten (Minimum) Werten einer Funktion unter
            bestimmten Bedingungen. Die Funktion kann dabei beispielsweise die
            Kosten, den Gewinn, die Entfernung oder eine andere messbare Größe
            darstellen, während die Bedingungen die Einschränkungen oder
            Vorgaben für das Problem definieren. Die Lösung einer
            Extremwertaufgabe besteht darin, den Wert der Funktion zu maximieren
            oder zu minimieren, während alle gegebenen Bedingungen erfüllt sind.
          </div>
          <div className="mb-6 mt-12 text-xl">Beispiel:</div>
          <div className="text-lg">
            Um das Konzept der Extremwertaufgaben besser zu verstehen,
            betrachten wir ein einfaches Beispiel: Angenommen, ein Bauer hat 100
            Meter Zaunmaterial zur Verfügung und möchte damit ein rechteckiges
            Feld umzäunen, um den größtmöglichen Flächeninhalt zu erhalten. In
            diesem Fall ist der Flächeninhalt die Funktion, die maximiert werden
            soll, und die Bedingung besteht darin, dass der Umfang des Feldes
            gleich der verfügbaren Zaunlänge sein muss. Indem wir die richtige
            Breite und Länge des Feldes wählen, können wir den größtmöglichen
            Flächeninhalt erzielen.
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
