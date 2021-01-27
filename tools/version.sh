#!/bin/bash
set -ex
# Make sure git is installed and we are in a git tree.
command -v git >/dev/null                       || { echo "UNKNOWN"; exit 0; }
git rev-parse --is-inside-work-tree &>/dev/null || { echo "UNKNOWN"; exit 0; }

CURR_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Look for the version tag.
CURRENT_COMMIT=$(git rev-parse HEAD)
CURRENT_COMMIT_SHORT=$(git rev-parse --short HEAD)

LATEST_VERSION_TAG=$(git describe --tags --match "v[0-9]*" --abbrev=0 || echo "")

if [ "$LATEST_VERSION_TAG" == ""]; then
  VERSION_TAG_COMMIT=$(git show-ref $LATEST_VERSION_TAG | cut -d' ' -f1)
  CURRENT_COMMIT_NO=$(git rev-list --count HEAD ^$VERSION_TAG_COMMIT)
  echo "No release tags"
else
  LATEST_VERSION_TAG="v0.0.0"
  VERSION_TAG_COMMIT="UNKNOWN"
  CURRENT_COMMIT_NO=$(git rev-list --count HEAD)
fi

NEXT_VERSION=$($CURR_DIR/semver.sh bump patch $LATEST_VERSION_TAG)

# Determine the current branch.
CURRENT_BRANCH="$GIT_BRANCH"
if [ "$CURRENT_BRANCH" == "" ]; then
    CURRENT_BRANCH="$BRANCH_NAME"
fi

if [ "$CURRENT_BRANCH" == "" ]; then
    CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
fi

CURRENT_BRANCH="$(echo $CURRENT_BRANCH | sed 's/_/-/g')"

# Dump some debug information.
if [ "$DEBUG" != "" ]; then
    echo "Latest version tag    : $LATEST_VERSION_TAG"
    echo "Version tag commit-ID : $VERSION_TAG_COMMIT"
    echo "Current commit-ID     : $CURRENT_COMMIT"
    echo "Current branch        : $CURRENT_BRANCH"
fi

if [ "$VERSION_TAG_COMMIT" == "$CURRENT_COMMIT" ]; then
    # Always use the tag if the current commit is the tag.
    echo "$LATEST_VERSION_TAG"
elif [ "$CURRENT_BRANCH" == "master" ]; then
    # Master branch: v0.124.42-pre.17+9a1fbdb29
    echo "$NEXT_VERSION-pre.$CURRENT_COMMIT_NO+$CURRENT_COMMIT_SHORT"
else
    # Other branch: v0.12.42-pre.17+status-display.9a1fbdb29
    echo "$NEXT_VERSION-pre.$CURRENT_COMMIT_NO+$CURRENT_BRANCH.$CURRENT_COMMIT_SHORT"
fi
