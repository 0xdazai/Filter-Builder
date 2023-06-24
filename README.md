# Filter-Builder
Filter Builder is a tool designed to ease the process of generating filter commands for the Discord bot, Hashbot. 

This was built out of the need for a more straightforward, more effective way of protecting Discord communities from impersonation. Hashbot, a popular Discord bot, already does a great job in actively monitoring usernames, but setting up each filter is tedius. Filter Builder streamlines this process, enabling you to generate and apply filters more quickly.

## What is Phrase & Regex?
Phrase and Regex (short for regular expression) are two different methods of pattern matching used in the filter generation process.

**Phrase:** A Phrase is any sequence of characters (the 'pattern') that a username might contain. When a username matches this pattern, it triggers the filter. The match is case-sensitive.
**Regex:** Short for regular expression, Regex is a more complex but also more precise method of defining patterns for matching. With Regex, you can specify a pattern that accounts for variations in case, positioning, and even character types. Regex is more granular and allows for more control, but can be more difficult to set up due to its complexity.

## How to Use Filter Builder
Enter your terms: Populate the text boxes with general words or phrases you want to filter out, and team member names you want to protect from impersonation.

**Select pattern type:** Choose the type of pattern matching (Phrase, Regex, or both) that you want to use.
**Generate commands:** Click the "Run" button to generate a list of commands.
**Apply commands:** Copy the generated commands to your clipboard and paste into your Discord server to set up your filters with Hashbot.

Filter Builder is specifically designed to work with Hashbot and aims to augment the bot's existing capabilities.
