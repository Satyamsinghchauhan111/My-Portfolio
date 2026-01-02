import { FullscreenWrapper } from "./FullScreenWrapper";

const UserComponents = () => {
  return (
    <FullscreenWrapper
      id="main-2"
      className="bg-teal-500 rounded-[36px] text-white font-semibold "
    >
      {(isFull) => (
        <div className="flex flex-col items-center gap-2">
          <span>User</span>
          <span className="text-xs opacity-80">
            {isFull ? "Click to exit fullscreen" : "Click to go fullscreen"}
          </span>
        </div>
      )}
    </FullscreenWrapper>
  );
};
export default UserComponents;
