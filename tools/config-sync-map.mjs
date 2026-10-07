/** Public CoreCaseX defaults allow-listed for website synchronization. */
export const SOURCE_REPOSITORY = 'IceWolf23X/CoreCaseX-plugin';
export const SOURCE_REF = 'main';

export const CONFIG_FILES = [
  { id: 'paper/config.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/config.yml', target: 'synced-configs/paper/config.yml', article: 'paper/config-yml' },
  { id: 'paper/case-types.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/case-types.yml', target: 'synced-configs/paper/case-types.yml', article: 'paper/case-types-yml' },
  { id: 'paper/messages.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/messages.yml', target: 'synced-configs/paper/messages.yml', article: 'paper/messages-yml' },
  { id: 'paper/storage.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/storage.yml', target: 'synced-configs/paper/storage.yml', article: 'paper/storage-yml' },
  { id: 'paper/discord.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/discord.yml', target: 'synced-configs/paper/discord.yml', article: 'paper/discord-yml' }
];
