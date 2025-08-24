# bash: install ALL Magic UI components via shadcn registry items
components=(
  marquee terminal hero-video-dialog bento-grid animated-list dock globe tweet-card client-tweet-card orbiting-circles avatar-circles icon-cloud animated-circular-progress-bar file-tree code-comparison script-copy-btn scroll-progress lens pointer
  safari iphone-15-pro android
  animated-beam border-beam shine-border magic-card meteors neon-gradient-card confetti particles cool-mode scratch-to-reveal
  blur-fade
  text-animate line-shadow-text aurora-text number-ticker animated-shiny-text animated-gradient-text text-reveal hyper-text word-rotate typing-animation scroll-based-velocity flip-text box-reveal sparkles-text morphing-text spinning-text
  rainbow-button shimmer-button shiny-button interactive-hover-button animated-subscribe-button pulsating-button ripple-button
  warp-background flickering-grid animated-grid-pattern retro-grid ripple dot-pattern grid-pattern interactive-grid-pattern
)
for c in "${components[@]}"; do
  echo "Installing $c ..."
  npx shadcn@latest add "https://magicui.design/r/${c}.json" || echo "Failed: $c (continuing)"
done
echo "Done."