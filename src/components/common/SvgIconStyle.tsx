export default function SvgIconStyle({ src, color, ...sx }: any) {

  return (
    <span
      style={{
        width: 24,
        height: 24,
        display: 'inline-block',
        backgroundColor: color ? color : '#2c3032',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
}
