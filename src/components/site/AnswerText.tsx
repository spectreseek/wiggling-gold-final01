type Block = { type: "p"; text: string } | { type: "ul" | "ol"; items: string[] };

// Answers are stored as plain text with "- " and "1. " lines. Turn them into real paragraphs and lists.
const toBlocks = (text: string): Block[] => {
  const blocks: Block[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const bullet = line.match(/^- (.*)$/);
    const numbered = line.match(/^\d+\. (.*)$/);
    const kind = bullet ? "ul" : numbered ? "ol" : null;
    const last = blocks[blocks.length - 1];
    if (kind) {
      const item = (bullet ?? numbered)![1];
      if (last && last.type === kind) last.items.push(item);
      else blocks.push({ type: kind, items: [item] });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  return blocks;
};

const AnswerText = ({ text }: { text: string }) => (
  <div className="space-y-3">
    {toBlocks(text).map((b, i) => {
      if (b.type === "p") return <p key={i}>{b.text}</p>;
      const List = b.type;
      return (
        <List key={i} className={`${b.type === "ul" ? "list-disc" : "list-decimal"} space-y-1.5 pl-5 marker:text-wg-gold-ink`}>
          {b.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    })}
  </div>
);

export default AnswerText;
