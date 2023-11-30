import { ReactNode } from "react";

const Citation = (props: { children: ReactNode; link?: string }) => (
  <p className="px-8 py-1 -indent-8">
    {props.children}
    {props.link && (
      <a href={props.link} className="text-orange-700 mx-2">
        {props.link}
      </a>
    )}
  </p>
);

export default function CitationsPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-3xl flex flex-col gap-4">
        <h1 className="text-white text-3xl font-medium">Works Cited</h1>
        <Citation>
          Watts, G. Robert. “Homelessness Is an Ethical Issue in America.” AMA J
          Ethics. 2021;23(11):E835-839. doi: 10.1001/amajethics.2021.835,
          Accessed 29 November, 2023
        </Citation>
        <Citation link="https://www.coalitionforthehomeless.org/basic-facts-about-homelessness-new-york-city/">
          “Basic Facts About Homelessness: New York City.” Coalition for the
          Homeless. 2023, Accessed 29 November, 2023
        </Citation>
        <Citation link="http://proxy.library.stonybrook.edu/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=a2h&AN=156195173&site=ehost-live">
          Craven, Krista, et al. “‘I’m No Criminal, I’m Just Homeless’: The
          Greensboro Homeless Union’s Efforts to Address the Criminalization of
          Homelessness.” Journal of Community Psychology, vol. 50, no. 4, May
          2022, pp. 1875–92. EBSCOhost, Accessed 29 November ,2023
        </Citation>
        <Citation link="https://www.forbes.com/sites/forbeseq/2022/01/01/how-the-us-criminalizes-homelessness/?sh=7669a2">
          Dholakia, Nazish, “How The U.S. Criminalizes Homelessness”. Forbes 1,
          January 2022, Accessed 29 November, 2023
        </Citation>
        <Citation link="https://invisiblepeople.tv/what-america-believes-about-homelessness/">
          “What America Believes about Homelessness.” Invisible People, 20 Jan.
          2021, Accessed 29 November, 2023
        </Citation>
      </div>
    </main>
  );
}
