source "https://rubygems.org"

# Use the GitHub Pages gem, which manages Jekyll and its dependencies
gem "github-pages", group: :jekyll_plugins

# Add any additional plugins you need here
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby-specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]