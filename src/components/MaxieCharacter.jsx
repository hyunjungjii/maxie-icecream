import maxie from '../assets/icemaxie.png';

export default function MaxieCharacter() {
  return (
    <img
      src={maxie}
      alt="maxie"
      style={{
        width: '160px',
        height: 'auto',
        display: 'block',
        objectFit: 'contain'
      }}
    />
  );
}