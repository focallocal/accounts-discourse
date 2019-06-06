Package.describe({
  name: 'sylque:accounts-discourse',
  summary: 'A login service using Discourse SSO as a provider',
  version: '0.0.4',
  git: 'https://github.com/sylque/accounts-discourse',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.6.1')

  api.use(
    ['ecmascript', 'accounts-base', 'service-configuration'],
    ['client', 'server']
  )
  api.use(['check', 'mongo', 'random', 'check'], 'server')

  api.imply(['accounts-base', 'accounts-password'])

  api.addFiles('lib/client.js', 'client')
  api.addFiles('lib/server.js', 'server')
})
