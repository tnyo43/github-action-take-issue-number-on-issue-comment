# github-action-take-issue-number-on-issue-comment

If you want to get PR number in both `pull_request_review_comment` and `issue_comment` triggered events, you can create a function like follows:

```js
import { context } from "@actions/github";

function getPrNumber() {
  return context.payload.issue?.number || context.payload.pull_request?.number;
}
```
