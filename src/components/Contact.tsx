import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactLogo";
import { Badge } from "./ui/badge";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindLogo";
import { JavaIcon } from "./icons/JavaLogo";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you
      </h2>
      <div>
        <div className="flex max-md:flex-col  w-full gap-4">
          <ContactCard
            className="flex-1"
            url="https://www.linkedin.com/in/emilie-lolia-d%C3%A9veloppement-web/"
            name="Emilie lolia"
            image="https://media.licdn.com/dms/image/C4E03AQHOBsFbLqqpvw/profile-displayphoto-shrink_400_400/0/1660825014340?e=1724889600&v=beta&t=-8tyjM8nZYD3nVOqRCGqrf-W3RgUNvUEVtknsWMfNH0"
            mediumImage="data:image/png;base64,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"
            description=""
          />
          <ContactCard
            className="flex-1"
            url="mailto:e.lolia971@gmail.com"
            name="My mail"
            image="https://media.licdn.com/dms/image/C4E03AQHOBsFbLqqpvw/profile-displayphoto-shrink_400_400/0/1660825014340?e=1724889600&v=beta&t=-8tyjM8nZYD3nVOqRCGqrf-W3RgUNvUEVtknsWMfNH0"
            mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABLFBMVEX////qQzVChfQ0qFPFIh/7vASpwvmk0682gPQkpEk8gvRckvXx9P7w9/JSsWnKKCPsVDL6sxAspk7C0/u+3sXhoKD825vCCQDqPzDpNybqOyv+9/b3vrrpMyH0qqX7uAD73tzrUEP86OfykYrpKxX0pJ/HHxbvdm74xsLwhHwSoT/hmZj92IboIADsV0v50M7uaV/OtyHympP1tbBXq0rl8ujqvbzdj4//++7+7s395K/Vd3fOUlHJOjfTbGv8zWf7xUb7wS780XfchYP8ylfNSUbWZmL1p5PrRx7Hr8ixIUHktg/U16NhacesPmBxrDtYeNqXVpOuszKAYqyUsDmFrzzBQEuhRWy6tCi8Lj2YTX52aLi8HiXIqipiqVrZ5/yGr/eDxpNxn/ZpuXtKo6o3AAAHTElEQVR4nO3be3vTNhQHYMlJxmUwWKCNbMeNk+baSxpa6G1cWkphWzYoZWywsXHZ9/8Ok1PaprEsH9mJpD47v//t9n10pCPbCiEYDAaDwWAwGAwGg8FgMBjMzOOb/gdE2Va/JNyc29o62Npa3lyzhrS9s7syyvzuDvyqxtwPDx8VK1Hajw4fz4Uz+/8UsjP/ZG+/VKrVaqXS/t7TedgI+XMPi5V2u3iSdrtSPDwwPjrbT/dKXDGWvXnAZeHzM0jxDHS4OfN/V5rd/VI8z1KLbfPDJGXEqRzo+J+T8rQmsPBq25Ve5W9VRBaeymGo5x+PZ0c0LCdZkcwcfzlWYueD88hQqQlL7DTzybN5M2lcRprickOj4Wu2VyQUnsRKC4XzZWziPF7T6Yiy80w8XU5T209YBfzHFZkl4jzUXGq7e/Jx4Zon4is30yx8Gbi1pbHUtlf25eMy0oiH5jAdw0vteajLsvMsVRJh9kTXrgEsEUdXA00vMcnQHMAwxfatdQ27G//F9zBLqSSaNdKVbDy3gkE4a0s4+BGMKcUvbwAHhmNoUK/OdHD8at29DcbU4tsA4JQZYagXtGa4qjVagUcVMPHGuaGCoXS1F87KEvZW+R/IhZlTw9CgX52NpdoPqBKmFH+yUcVQj86i1BotfmP9GMq8ztT3amsdj1ETGD440y61at87vbd2DGV0mg3UX6eMmsNQNsUGGg6Cc4sJDKWuN6VSq3ru+H2NYChrLk6h1PzFJqPmMbyBdsK8lrCzOnFTU5iogeYaHP9ro7QCk7OBnjVKOzDUY73MDXStx+IWkxi+HcjaQHmjZIIbmsREpZalgfJGKRgW4xjK3L7yxGn0XdGwmMfwwVFtoFVPPCw2YBQbaKxR2oWhtAnfq4WDpuRGCk+accxPP0M1Ugx1gQ2UN0pXdh84ZvhL7Obf/PpS9g0AjAE2UGGjzIS59+pKHHP16PUH0OCkYPgykN5A13rJU18Nc3z/mgjjOG/eQzRpmGivtiG3LMT3Ytkww98KhQSMAyq1dAyvINmq5i+y5FVMCXPvVSEZ4xy9TtcAMHx3k7yqhQPh/iUD5rhckGF4qRXTSg2C4ataPaHUNurSVUwB87ZQSME4R7+naGAYvrtZFKxqjcWk/Ysipja8X0jHOM4fyd+cFTC8gcafQMOOrFGqYN4VCiDM9TfvZRowJva1wK/WU1cxGCZaxWAYvqrJBgeO4S1nfazUGutpzQWKGa1iUIwja6AKGL7zPH+Fu9aR7CsVMLXh8f2CCoavaol7NRXMqIGOSs3fSG+UIExtvMSAGF5qCRo1TPQKtxGVGFUYFhnmQolBMYkNVBEz+lpw/nY/L+ZiiYExjvNXWzQ4qhjKWL0O2MCAMJPDAsc4R6KJo4yJOMqXCDHD2LAoYBznz3ipZcBkiAjzTkBRwfBVbVJjCjN8K7SoYPhjwUQDNYSJrWJZMHxVK7aNY4bxVSwTZrKBGsDUkkosA+ZiAzWASSyxLJgLDVQ/JrnEMmF4Az172aEbM5QNSzaMc/SyYgRzTzosGTFnDVQvRtwo82N4qbU1Y4Zvy7PCnDRQjZjUEsuDGT2BasMMjwGUHJhRA9WEmXyinAGGN1Dgm69cYbf/TlmRp4JxjpYp6J1knrj0xT/pUz8/5vq3N7pq7ybUE/S7N7/ThCFhL5hhqbGgFxJ9GOIvBvD3eYrxguh7iEYMId2Uz3jZLfVudH+tGNJQfnsECXM7Jy909WKIvw770qISt356ZkUzhpDqYLoth7mDsyMe2jF8VcvwRizZwsbO5OvHRJ/zp1Zq7oUDBAYwxO8OptRAg0F3/MuUCUxUatAve9I0J372YQZDSGs198RhqwsTNzWFId0g58Rxg+7kPY1heAPNs0azoBM/z2EOEzXQzLsbry463GkQQ/wq6BCJYFi8gfCAmklM1gZ6oVHag+ENVH2v5taTTtoZxvAG2ldsOc1+N+kol2lMtKqpnFtgzV7yAUjzGOIvwDWsuSA5YWcBhjdQBiy1JpOe5LQCQxo9SANlrqTE7MEQv5XeQL16K+X0syWY0ROo3DL2RGk9hjdQ2XaAeYBfeduDiUotcXDc1BKzDMNXtaSfLTQHse2+9RheaqJVja9iIehyuzCksRB/6enRBeCvnyzD8FKb/FoQ9EElZiWGhJ3xrwX8iTIEX2ofhpDW+elfz2spXGgjhpfayTrAXHiJWYvhjwXREyhjHbXfPdqJ4Q2077p9SKO8BJhor5a+F7s0GBKGypfYi8kQxCAGMYhBDGIQgxjEIAYxiEEMYhCDmP8X5s7lxdyNXfzx0mKWHsSvdq5fTky5ILgaOmlswyzFpwwhN4BDYxmmXBZUGXhoLMMIB4YPzSeQxi7M0ueb4us/foForMIs/SssspHm09X0eWMRprz0OdHCK+2Ok8qxBlNeKsTb5QTni3NVHl2Ya9KUy99dSZgu47nx8Y48WjDkrjwPJAWGwWAwGAwGg8FgMBgMBoPBYDAYrfkPUgFpOmCdvWoAAAAASUVORK5CYII="
            description=""
          />
        </div>
      </div>
    </Section>
  );
};
