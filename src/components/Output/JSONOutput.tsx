import { Collapse } from '~/components';

type Props = {
  title?: string;
  json?: { [key: string]: any } | string | null;
};

export function JSONOutput({ title = 'JSON Output', json }: Props) {
  const text = typeof json !== 'string' ? JSON.stringify(json, null, 2) : json;
  return <Collapse title={title}>{!!text && <pre className="my-4 text-xs overflow-auto">{text}</pre>}</Collapse>;
}
