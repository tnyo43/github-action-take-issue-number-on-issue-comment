import * as core from "@actions/core";
import { context } from "@actions/github";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  try {
    console.log(
      `the number of this PR is #${
        context.payload.issue?.number || context.payload.pull_request?.number
      }`
    );
    console.log({
      issueNumber: context.payload.issue?.number,
      prNumber: context.payload.pull_request?.number,
    });
    console.log(context.payload);
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
