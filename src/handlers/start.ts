import { BotContext } from "../bot";

export default async function start_handler(ctx: BotContext) {
    await ctx.reply(
        `Hello, I am a bot that forwards messages from one chat to another. I only work for the owner of this bot.\n\nIf you are the owner of this bot, you can forward messages from one chat to another learn more using /help command.`,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Make Me Admin In Both Channels",
                            url: "https://t.me/POST_KARDUNGA_BOT?startchannel=true&admin=post_messages",
                        },
                    ],
                ],
            },
        }
    );
}
