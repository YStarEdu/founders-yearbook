# YStar Founders class yearbook

Every YStar Founders student signs this yearbook with their first real GitHub pull request. It's the same way developers suggest changes to each other's code: you copy the project, change it, and ask the owner to merge your change.

The signed yearbook is online at **https://ystaredu.github.io/founders-yearbook/**.

## Sign it in 5 steps

1. **Fork** this repository: click **Fork** at the top right, then **Create fork**. You now have your own copy.
2. In your fork, open the `students` folder and click **Add file → Create new file**.
3. Name the file with your first name (or a nickname) and the first letter of your product, in lowercase, for example `maya-s.json`.
4. Copy everything from [`TEMPLATE.json`](TEMPLATE.json), paste it in and fill it in. Then click **Commit changes**.
5. Click **Contribute → Open pull request**, give it a title like `Add Maya's card`, and click **Create pull request**. Your mentor reviews it and merges it, and your card appears online.

## Your card

```json
{
  "name": "Maya",
  "emoji": "📚",
  "product": "StudySpot",
  "line": "Quiet places to study after the library closes.",
  "url": "https://studyspot.ca"
}
```

| Field | What to write | Limit |
| --- | --- | --- |
| `name` | Your first name or a nickname | 20 characters |
| `emoji` | One emoji for your product | 1 emoji |
| `product` | Your product's name | 30 characters |
| `line` | What it does, in one line | 90 characters |
| `url` | Your live product, starting with `https://`, or `""` if it isn't live yet | |

## Rules

- First name or nickname only: no last names, school names, photos, emails, phone numbers or social handles.
- One card per student, and only edit your own card.
- Be kind. Everything here is public.

An automatic check runs on every pull request and tells you if something needs fixing. A YStar mentor merges every card by hand.

## Why we do this

Pull requests are how almost all software is built together, from small school projects to the biggest open-source tools. After this quest, you've done the whole loop: fork, commit, pull request, review, merge.
