import Image from "next/image";

class MyClass {
  public someProperty?: string;

  constructor() {
  }
}

export default function Home() {
  console.log(new MyClass());
  
  return (
    <>Hello World</>
  );
}
