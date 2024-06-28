import Header from '../header';
import Component1 from './component-1';
import Component3 from './component-3';
// import Component4 from './component-4';
// import Component5 from './component-5';

export default function Homepage() {
  return (
    <div className="mb-5">
      <Header
        title="Order Your Disposal Bin Today for Efficient Waste Management"
        content="24Seven Disposal offers bin rentals, dumpster rentals, and junk removal services throughout the GTA (Greater Toronto Area)."
      />
      <Component1 />
      {/* <Menu /> */}
      <Component3 />
      {/* <Component4 /> */}
      {/* <Component5 /> */}
    </div>
  );
}
