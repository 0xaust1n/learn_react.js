import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author="Jon" content="Good Job" />
			</ApprovalCard>
		</div>
	);
};

export default App;
