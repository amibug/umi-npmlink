import { Foo } from 'mockjs';
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  return (
    <div>
      <Foo title="test"/>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
